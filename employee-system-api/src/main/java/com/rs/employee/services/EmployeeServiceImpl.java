package com.rs.employee.services;

import com.rs.employee.entity.EmployeeEntity;
import com.rs.employee.model.Employee;
import com.rs.employee.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService
{
    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository)
    {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee)
    {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees()
    {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();
        List<Employee> employees = employeeEntities
                .stream()
                .map(employeeEntity -> new Employee(employeeEntity.getId(),
                        employeeEntity.getFirstName(),
                        employeeEntity.getLastName(), employeeEntity.getEmailId()))
                .collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(long id)
    {
//        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
//        employeeRepository.delete(employeeEntity);
//        return true;
        if (employeeRepository.existsById(id))
        {
            employeeRepository.deleteById(id);
            return true;
        }
        else
        {
            // Handle the case when the employee does not exist
            throw new EntityNotFoundException("Employee with ID " + id + " not found");
        }
    }

    @Override
    public Employee getEmployeeById(long id)
    {

        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(long id, Employee employee)
    {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
//        BeanUtils.copyProperties(employee, employeeEntity);
        employeeEntity.setEmailId(employee.getEmailId());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeRepository.save(employeeEntity);
        return employee;
    }
}
