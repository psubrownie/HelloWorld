package com.jivesoftware.helloworld.widgets;

import com.jivesoftware.community.annotations.PropertyNames;
import com.jivesoftware.community.widget.BaseWidget;
import com.jivesoftware.community.widget.WidgetContext;
import com.jivesoftware.community.widget.WidgetType;
import com.jivesoftware.community.widget.WidgetTypeMarker;

@WidgetTypeMarker({ WidgetType.HOMEPAGE, WidgetType.COMMUNITY,
		WidgetType.PROJECT })
@PropertyNames({ "classification" })
public class ClassificationWidget extends BaseWidget {
	private String classification;

	public String getClassification() {
		return classification;
	}

	public void setClassification(String classification) {
		this.classification = classification;
	}

	@Override
	public String getTitle(WidgetContext widgetContext) {
		return "Classification Widget";
	}

	@Override
	public String getDescription(WidgetContext widgetContext) {
		return "Display classification";
	}

	@Override
	public String render(WidgetContext widgetContext, ContainerSize size) {
		return "<div style=\"background-color:#4cb230;text-align:center;font-size:17px;font-weight:bolder;\">This page contains dynamic content-- Highest Possible Classification is UNCLASSIFIED/FOR OFFICIAL USE ONLY.</div>";
	}
}
