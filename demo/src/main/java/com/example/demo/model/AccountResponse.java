package com.example.demo.model;

public class AccountResponse {
	
	private String accountNumber;
	private String currency;
	private String type;
	private Double balance;
	private String userNid;
	private String hasIb;
	private String password;
	
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Double getBalance() {
		return balance;
	}
	public void setBalance(Double balance) {
		this.balance = balance;
	}
	public String getUserNid() {
		return userNid;
	}
	public void setUserNid(String userNid) {
		this.userNid = userNid;
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

}
