package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ACCOUNT")
public class AccountEntity {
	
	@Column(name="ACCOUNT_NUMBER")
	@Id
	private String accountNumber;
	
	@Column(name="CURRENCY")
	private String currency;
	
	@Column(name="TYPE")
	private String type;
	
	@Column(name="BALANCE")
	private Double balance;
	
	@Column(name="USER_NID")
	private String userNid;
	
	@Column(name="HAS_IB")
	private String hasIb;
	
	@Column(name="PASSWORD")
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
