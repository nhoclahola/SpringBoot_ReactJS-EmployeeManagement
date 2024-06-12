import React from 'react'
import { useNavigate } from 'react-router-dom'

interface EmployeeProps {
    employee:
    {
        id: number,
        firstName: string,
        lastName: string,
        emailId: string
    }
    deleteEmployee: (e: React.MouseEvent<HTMLAnchorElement>, id: number) => void
}

const Employee = ({ employee, deleteEmployee }: EmployeeProps) => {

    const navigate = useNavigate();

    const editEmployee = (e: React.MouseEvent<HTMLAnchorElement>, id: Number) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`)
    };

    return (
        <tr key={employee.id}>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.firstName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.lastName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.emailId}</div>
            </td >
            <td className='text-right px-6 py-4 whitespace-nowrap'>
                <a 
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => editEmployee(e, employee.id)}
                    className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit</a>
                <a
                    onClick={(e : React.MouseEvent<HTMLAnchorElement>) => deleteEmployee(e, employee.id)}
                    className='text-red-600 hover:text-red-800 hover:cursor-pointer'>Delete</a>
            </td>
        </tr>
    )
}

export default Employee