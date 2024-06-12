package com.rs.employee.controller;

import com.rs.employee.model.Employee;
import com.rs.employee.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController
{
    @Autowired
    private EmployeeService employeeService;

    // Handle POST request to save data
    @PostMapping("employees")
    public Employee createEmployee(@RequestBody Employee employee)
    {
        System.out.println(employee);
        return employeeService.createEmployee(employee);
    }

    // GET List of employees api
    @GetMapping("employees")
    public List<Employee> getAllEmployee()
    {
        return employeeService.getAllEmployees();
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable long id)
    {
        boolean deleted = false;
        deleted = employeeService.deleteEmployee(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id)
    {
        Employee employee;
        employee = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,
                                                   @RequestBody Employee employee)
    {
        employee = employeeService.updateEmployee(id, employee);
        return ResponseEntity.ok(employee);
    }
}
