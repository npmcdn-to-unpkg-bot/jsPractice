import React , { Component } from "react";
import { render as Render } from "react-dom";

import MyComponent from "myComponent";
import LikeButton from "likeButton";
import Test from "test";
import Arrow from "arrow";

Render(
	<div>
		<MyComponent></MyComponent>
		<LikeButton></LikeButton>
		<Test></Test>
		<Arrow author = {"julien"}></Arrow>
	</div>,
	document.getElementById("content")
);