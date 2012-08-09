package com.jivesoftware.helloworld.dao;

import java.util.List;

import com.jivesoftware.helloworld.beans.CmpData;

public class CmpManagerImpl implements CmpManager {

	private CmpDAO cmpDAO;

	@Override
	public void setCmpDAO(CmpDAO dao) {
		cmpDAO = dao;

	}

	@Override
	public List<CmpData> readData() {
		return cmpDAO.readData();
	}

	@Override
	public void addData(CmpData data) {
		cmpDAO.addData(data);

	}

}
