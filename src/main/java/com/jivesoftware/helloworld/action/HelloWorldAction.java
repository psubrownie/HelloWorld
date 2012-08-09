package com.jivesoftware.helloworld.action;

import java.util.List;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jivesoftware.community.action.JiveActionSupport;
import com.jivesoftware.helloworld.beans.CmpData;
import com.jivesoftware.helloworld.dao.CmpManager;

/**
 * Really dumb logic class User: Sean M. Staley
 */
public class HelloWorldAction extends JiveActionSupport {
	// Get that logger in there!
	Logger log = Logger.getLogger(HelloWorldAction.class);
	// Variable to hold the user's name
	private String userName;

	@Override
	public String execute() {
		log.info("In the Action class for the HelloWorld plugin!");
		return SUCCESS;
	}

	public String getUserName() {
		log.debug("The user's username is " + getUser().getUsername());
		return getUser().getUsername();
	}

	public String getData() {
		String result;
		ApplicationContext context = WebApplicationContextUtils
				.getWebApplicationContext(ServletActionContext
						.getServletContext());
		CmpManager cmpManager = (CmpManager) context.getBean("cmpManager");
		List<CmpData> list;
		try {

			log.debug("entering getData()");

			// CmpData data = new CmpData();
			// data.setCmpID(2);
			// data.setField1(5);
			// data.setField2(10);
			// data.setField3("field3");
			// data.setField4("field4");
			// cmpManager.addData(data);

			list = cmpManager.readData();
			if (list == null)
				result = "result is null";
			else
				result = "List size: " + list.size();

		} catch (Exception e) {
			log.error("HelloError", e);
			result = e.getMessage();
		}
		return result;
	}
}