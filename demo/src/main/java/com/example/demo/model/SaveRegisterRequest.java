package com.example.demo.model;

public class SaveRegisterRequest {
	
	private String accountNumber;
	private String hasIb;
	private String password;
	private String userNid;
	
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getHasIb() {
		return hasIb;
	}
	public void setHasIb(String hasIb) {
		this.hasIb = hasIb;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserNid() {
		return userNid;
	}
	public void setUserNid(String userNid) {
		this.userNid = userNid;
	}
	
}
