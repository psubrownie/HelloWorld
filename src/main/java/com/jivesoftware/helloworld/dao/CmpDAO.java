package com.jivesoftware.helloworld.dao;

import java.util.List;

import com.jivesoftware.helloworld.beans.CmpData;

public interface CmpDAO {
	void addData(CmpData data);

	List<CmpData> readData();

}
