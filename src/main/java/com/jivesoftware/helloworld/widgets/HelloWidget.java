package com.jivesoftware.helloworld.widgets;

import java.util.List;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jivesoftware.community.annotations.PropertyNames;
import com.jivesoftware.community.widget.BaseWidget;
import com.jivesoftware.community.widget.WidgetContext;
import com.jivesoftware.community.widget.WidgetType;
import com.jivesoftware.community.widget.WidgetTypeMarker;
import com.jivesoftware.helloworld.beans.CmpData;
import com.jivesoftware.helloworld.dao.CmpManager;

@WidgetTypeMarker({ WidgetType.HOMEPAGE, WidgetType.COMMUNITY,
		WidgetType.PROJECT })
@PropertyNames({ "filter" })
public class HelloWidget extends BaseWidget {

	private static final String FREEMARKER_FILE = "/plugins/HelloWorld/resources/templates/helloWorld-Page.ftl";

	private String filter;

	@Override
	public String getTitle(WidgetContext widgetContext) {
		return "CMP Widget";
	}

	@Override
	public String getDescription(WidgetContext widgetContext) {
		return "CMP Widget Description";
	}

	@Override
	public String render(WidgetContext widgetContext, ContainerSize size) {
		return applyFreemarkerTemplate(widgetContext, size, FREEMARKER_FILE);
		// return "My Awesome Widget";
	}

	public String getFilter() {
		return filter;
	}

	public void setFilter(String filter) {
		this.filter = filter;
	}
	
	public String getUserName() {
		return "MY USERNAME IN HELLO_WIDGET";
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
