package com.hoo.company.ddn.exception;

/**
 * 未发现该用户异常
 * @author hank
 *
 */
@SuppressWarnings("serial")
public class UserNotFoundException extends Exception {
	public UserNotFoundException(String msg) {
		super(msg);
	}
}
