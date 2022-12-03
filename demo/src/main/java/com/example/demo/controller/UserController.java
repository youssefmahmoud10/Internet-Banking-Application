package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.AccountResponse;
import com.example.demo.model.ProfileResponse;
import com.example.demo.model.TransactionRequest;
import com.example.demo.model.TransactionResponse;
import com.example.demo.model.UserRequest;
import com.example.demo.model.UserResponse;
import com.example.demo.services.UserServices;

@RestController
@RequestMapping("usersTable") //localhost:8282/usersTable
public class UserController {
	
	@Autowired
	private UserServices userServices;

	@CrossOrigin
	@PutMapping(path="/register")
	public Integer register(@RequestBody UserRequest userRequest)
	{	
		return userServices.register(userRequest);
	}
	
	@CrossOrigin
	@PostMapping(path="/login")
	public Integer login(@RequestBody UserRequest userRequest)
	{		
		return userServices.logIn(userRequest);
	}
	
	@CrossOrigin
	@PostMapping(path="/getUserData")
	public UserResponse getUserData(@RequestBody UserRequest userRequest)
	{
		return userServices.getUserData(userRequest);
	}
	
	@CrossOrigin
	@PostMapping(path="/getAccountData")
	public AccountResponse getAccountData(@RequestBody UserRequest userRequest)
	{
		return userServices.getAccountData(userRequest);
	}
	
	@CrossOrigin
	@PostMapping(path="/getTransactionsData")
	public List<TransactionResponse> getTransactionsData(@RequestBody UserRequest userRequest)
	{
		return userServices.getTransactionsData(userRequest);
	}
	
	@CrossOrigin
	@PostMapping(path="/getProfileData")
	public ProfileResponse getProfileData(@RequestBody UserRequest userRequest)
	{
		return userServices.getProfileData(userRequest);
	}
	
	@CrossOrigin
	@PostMapping(path="/makeTransaction")
	public Integer makeTransaction(@RequestBody TransactionRequest transactionRequest)
	{
		return userServices.makeTransaction(transactionRequest);
	}
	
}
