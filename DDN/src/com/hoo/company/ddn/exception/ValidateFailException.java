package com.hoo.company.ddn.exception;

/**
 * 用户凭证验证失败
 * @author hank
 *
 */
@SuppressWarnings("serial")
public class ValidateFailException extends Exception {
	public ValidateFailException(String msg) {
		super(msg);
	}
}
