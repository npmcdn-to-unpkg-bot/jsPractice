import React , { Component } from "react";
import { render as Render } from "react-dom";
import MyComponent from "myComponent";
import LikeButton from "likeButton";
import Test from "test";


Render(
	<div>
		<MyComponent></MyComponent>
		<LikeButton></LikeButton>
		<Test></Test>
	</div>,
	document.getElementById("content")
);