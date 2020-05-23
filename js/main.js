

/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Bhargav Parekh Student ID: 116760166 Date: September 16th 2019
*
*
********************************************************************************/


$(function(){

    $(document).ready(function(){
        console.log("jQuery working");
    })


    $("#teams-menu").on("click",function(event){
        event.preventDefault();

        $.ajax({
            url: "https://fierce-crag-35583.herokuapp.com/teams",
            type: "GET",
            contentType: "application/json"
        }) .done(function (data) {
            $("#data").empty().html("<h3>Teams</h3>")
            .append(JSON.stringify(data));
        });
    });

    $("#employees-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "https://fierce-crag-35583.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"
        }).done(function (data) {
            $("#data").empty().html("<h3>Employees</h3>")
            .append(JSON.stringify(data));
        });
    });

    $("#projects-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "https://fierce-crag-35583.herokuapp.com/projects",
            type: "GET",
            contentType: "application/json"
        }).done(function (data) {
            $("#data").empty().html("<h3>Projects</h3>")
            .append(JSON.stringify(data));
        });
    });
    
    $("#positions-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "https://fierce-crag-35583.herokuapp.com/positions",
            type: "GET",
            contentType: "application/json"
        }).done(function (data) {
            $("#data").empty().html("<h3>Positions</h3>")
            .append(JSON.stringify(data));
        });
    });
});