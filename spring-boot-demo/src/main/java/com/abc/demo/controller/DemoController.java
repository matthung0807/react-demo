package com.abc.demo.controller;

import com.abc.demo.model.Employee;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class DemoController {

    @CrossOrigin
    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return Arrays.asList(
                new Employee(1, "John", 33),
                new Employee(2, "Mary", 28),
                new Employee(3, "Tony", 45)
        );
    }
}

