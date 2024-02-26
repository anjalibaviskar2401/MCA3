package Conn;
import java.util.*;
import java.sql.*;
public class Mylogin {

	public static void main(String[] args) throws Exception
	{
        Class.forName("org.postgresql.Driver");
        Class.forName("org.postgresql.Driver");
		Connection con;
		con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/website","postgres","root");
		System.out.println("datbase connect");
		


    }
}