package com.jivesoftware.helloworld.dao;

import java.util.List;

import com.jivesoftware.helloworld.beans.CmpData;

public interface CmpManager {
	void setCmpDAO(CmpDAO dao);

	List<CmpData> readData();
	void addData(CmpData data);
}
