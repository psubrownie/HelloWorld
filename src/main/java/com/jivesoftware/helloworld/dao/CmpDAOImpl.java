package com.jivesoftware.helloworld.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;

import com.jivesoftware.base.database.dao.JiveJdbcDaoSupport;
import com.jivesoftware.helloworld.beans.CmpData;

public class CmpDAOImpl extends JiveJdbcDaoSupport implements CmpDAO {
	public void addData(CmpData data) {
		String sql = "INSERT INTO CMP_Table1 (cmpID,field1,field2,field3,field4) "
				+ "VALUES (?,?,?,?,?)";

		getSimpleJdbcTemplate().update(sql, data.getCmpID(), data.getField1(),
				data.getField2(), data.getField3(), data.getField4());
	}

	@Override
	public List<CmpData> readData() {

		String sql = "SELECT cmpID,field1,field2,field3,field4 FROM cmp_table1";// WHERE externalActivityID = ? ";
		List<CmpData> activities = getSimpleJdbcTemplate().query(sql,
				new ExternalActivityMapper());
		if (activities.size() == 0) {
			return null;
		} else {
			return activities;
		}

	}

	public static class ExternalActivityMapper implements RowMapper<CmpData> {
		public CmpData mapRow(ResultSet rs, int i) throws SQLException {
			CmpData f = new CmpData();
			f.setCmpID(rs.getInt("cmpID"));
			f.setField1(rs.getInt("field1"));
			f.setField2(rs.getInt("field2"));
			f.setField3(rs.getString("field3"));
			f.setField4(rs.getString("field4"));

			return f;
		}
	}
}
