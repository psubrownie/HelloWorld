package com.jivesoftware.helloworld;

import org.apache.log4j.Logger;

import com.jivesoftware.base.plugin.Plugin;

public class HelloWorldPlugin implements Plugin {
	 //Initialize the logger so you can create some logging level messages!  
    Logger log = Logger.getLogger(HelloWorldPlugin.class);  

	@Override
	public void initPlugin() {
		log.info("Starting the HelloWorld Plugin...");  

	}

	@Override
	public void destroy() {
		log.info("Stopping the HelloWorld Plugin...");

	}

}
