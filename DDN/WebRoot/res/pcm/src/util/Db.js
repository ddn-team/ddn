var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
/*
(function(){
Pcm.db.dropTable("index_message");
Pcm.db.createTable("index_message",[{
	  name:'姓名',
	  code:'name'
}]);
Pcm.db.insert("index_message",{ name:'好人啊' });
findDate();
Pcm.db.update("index_message",{name:'不识字好人啊aaaaaa'},"name=?",["好人啊"]);
findDate();
//查询数据
function findDate(){
	Pcm.db.query2("index_message",null,null,null,function(array){
            var str="";
            for(var i=0,len=array.length;i<len;i++){
                  str=str+array[i].id+":"+ array[i].name+"<br/>";
            }
            console.log(str);
	  });
}
})();*/
(function(){
	
	/**
	 * 数据库操作类
	 * @param dbname 数据库名
	 * @param version 版本
	 * @param description 描述
	 * @param size 大小
	 * @returns {Pcm.util.Db}
	 */
	Pcm.util.Db = function(dbname,version,description,size){
		/**
		 * {
		 *   tableName:{
		 *   	name:{},
		 *      age :{}
		 *   }
		 * }
		 */
		this._table_columns = {};
		
		//TODO 如果是浏览器的话
		if(!window.openDatabase){
			this.db = {};
			this.db.transaction = function(){};
			//alert('您的浏览器不支持openDatebase,建议更换高版本浏览器.');
		}else{
			this.db = null;
			try{
				this.db = window.openDatabase(dbname,version,description,size);
			}catch(e){}
			//库创建失败
			if(!this.db){
				this.db = {};
				this.db.transaction = function(){};
			}
			//var error = function(tx,ex){};
		}
	};
	
	Pcm.util.Db.prototype = {
			/**
			 * 执行sql操作
			 * @param {String} sql
			 */
			executeSql:function(sql){
				this.db.transaction(function(tx){
					tx.executeSql(sql);
				});
			},
			/**
			 * @param {String} tableName
			 * @param {Array} columns
			 *        var columns = [{
			 *           name:'姓名',
			 *           code:'name',
			 *           datatype:'Text'//字段类型,与SQLite 3.6.19支持一致(http://www.cnblogs.com/kfqcome/archive/2011/06/27/2137000.html)
			 *        }];
			 *        datatype: NULL,INTEGER,REAL,TEXT,BLOB 分别是: 值是null,整形,浮点型,字符串,数据块
			 * @param {Function} success 成功回调
			 */
			createTable:function(tableName,columns,success){
				var sql = 'CREATE TABLE IF NOT EXISTS ' + tableName,len = columns.length,column,code,datatype;
				columns.push({name:'主键', code:'id',datatype:'INTEGER' });//+1
				success = success || function(){};
				
				
				if(len > 0){
					var tc = this._table_columns[tableName] = {};
					
					sql += '(';
					for(var i=0;i<len + 1;i++){
						column = columns[i];
						//兼容用户KEY输错情况
						for(var key in column){ column[key.toLowerCase()] = column[key]; }
						code   = column.code;
						datatype = column.datatype || '';
						sql += (code + ' ' + datatype);
						if(code == 'id'){ sql += ' PRIMARY KEY AUTOINCREMENT'; }
						if(i != len){ sql += ','; }
						
						tc[code] = column;
					}
					sql += ')';
					this.db.transaction(function(tx){
						tx.executeSql(sql,[],function(tx,result){ success.call(tx); });
					});
					
				}
			},
			/**
			 * 删除表
			 * @param {String} tableName 表名
			 */
			dropTable:function(tableName){
				this.db.transaction(function(tx){
					tx.executeSql('DROP TABLE ' + tableName);
				});
			},
			/**
			 * 表数据插入
			 * @param {String} tableName 表名
			 * @param {Object} row 行数据//(集合)|Array
			 */
			insert:function(tableName,row){
				var sql = 'INSERT INTO ' + tableName,filed ='(',v =' VALUES(',values=[],tc = this._table_columns[tableName];
				for(var k in row){
					if(!tc[k]){  throw '表:' + tableName + '中不存在字段:' + k; }
					
					filed += k + ',';
					v     += '?,';
					values.push(row[k]);
				}
				if(values.length > 0){
					filed = filed.substring(0,filed.length - 1) + ') ';
					v     = v.substring(0,v.length - 1) + ') ';
					sql += (filed + v);
					this.db.transaction(function (tx) {  
						tx.executeSql(sql,values);  
					});
				}
			},
			/**
			 * 数据删除
			 * @param {String} tableName 表名
			 * @param {String} where where语句
			 * @param {Array} whereArgs 语句对应的条件
			 */
			del:function(tableName,where,whereArgs){
				var sql = 'DELETE FROM ' + tableName;
				if(where){ sql += (' WHERE ' + where);}
				if(!whereArgs){whereArgs=[];}
				 this.db.transaction(function (tx) {  
			    	tx.executeSql(sql, whereArgs);  
		        });
			},
			/**
			 * 更新
			 * @param {String} tableName 表名
			 * @param {Object} row 待更新行数据
			 * @param {String} where where条件
			 * @param {Array} whereArgs 条件参数
			 */
			update:function(tableName,row,where,whereArgs){
				var sql = 'UPDATE ' + tableName,set = '',values = [],tc = this._table_columns[tableName];
				for(var k in row){
					if(!tc[k]){ throw '表:' + tableName + '中不存在字段:' + k; }
					
					set += (k + '= ?,');
					values.push(row[k]);
				}
				if(where.length > 0){ where = ' WHERE ' + where; }
				if(set.length   > 0){ set   = ' SET '   + set.substring(0, set.length - 1);}
				sql += (set + where);
				this.db.transaction(function(tx){
					tx.executeSql(sql,values.concat(whereArgs));
				});
			},
			queryO:function(sql,where,whereArgs,order,success){
				if(where){ sql += (' WHERE ' + where);}
				if(order){ sql += (' ORDER BY ' + order);}
				if(!whereArgs){whereArgs = [];}
				success = success || function(){};
				this.db.transaction(function (tx) {  
			    	tx.executeSql(sql, whereArgs,function(tx,r){
			    		success.call(tx,r);
			    	});  
		        });
			},
			/**
			 * 查询
			 * @param {String} sql select SQL语句
			 * @param {String} where where条件
			 * @param {Array} whereArgs 参数
			 * @param {String} order 排序  name desc,age asc
			 * @param {Function} success 正常回调 (tx,array)
			 */
			query:function(sql,where,whereArgs,order,success){
				if(where){ sql += (' WHERE ' + where);}
				if(order){ sql += (' ORDER BY ' + order);}
				if(!whereArgs){whereArgs = [];}
				success = success || function(){};
				this.db.transaction(function (tx) {  
			    	tx.executeSql(sql, whereArgs,function(tx,r){
			    		var array = [],rows = r.rows,item;
			    		for(var i = 0,len = rows.length;i<len;i++){
			    			item = rows.item(i);
			    			array.push(item);
			    		}
			    		success.call(tx,array);
			    	});  
		        });
			},
			query2:function(tableName,where,whereArgs,order,success){
				var sql = "SELECT * FROM " + tableName;
				this.query(sql, where, whereArgs, order, success);
			},
			/**
			 * 获取总数
			 * @param {String} tableName 
			 * @param {String} where where条件 age>? and name =?
			 * @param {Array} whereArgs where条件对应的参数 [12,'张三']
			 * @param {Function} success 回调
			 */
			getCount:function(tableName,where,whereArgs,success){
				success = success || function(){};
				var sql = 'SELECT COUNT(*) AS _o FROM ' + tableName;
				if(where){ sql += (' WHERE ' + where);}
				if(!whereArgs){ whereArgs = [];}
				this.db.transaction(function (tx) {  
			    	tx.executeSql(sql, whereArgs,function(tx,r){
						success.call(tx,r.rows.item(0)._o);
					});  
		        });
			}
	};
	
	//系统默认建立数据库
	Pcm.db = new Pcm.util.Db('gilight_pcm_v2','1.0','掌上校园v2.0数据库',1*1024*1024);
	
})();