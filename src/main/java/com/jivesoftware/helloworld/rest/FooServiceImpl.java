package com.jivesoftware.helloworld.rest;

import java.util.Date;

import com.jivesoftware.community.dwr.RemoteSupport;
import com.jivesoftware.helloworld.dao.CmpManager;

public class FooServiceImpl extends RemoteSupport implements FooService {

	private CmpManager cmpManager = null;

	/************************************************************************************************
	 * NOTE: NEED TO MANUALLY CONFIGURE VIA /spring.xml
	 ************************************************************************************************/
	public void setCmpManager(CmpManager cmpManager) {
		this.cmpManager = cmpManager;
	}

	@Override
	public String ping(String message) {
		if (message != null) {
			return new StringBuffer(message).append(" - ").append(new Date().getTime()).toString();
		} // end if
		return "no message";
	} // end ping

	@Override
	public FooEntity pong(String key, String value) {
		FooEntity foo = new FooEntity();
		foo.setKey(key);
		foo.setValue(value);
		return foo;
	} // end pong

} // end class	