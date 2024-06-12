import React from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const navigate = useNavigate();

    const [employee, setEmployee] = React.useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    };

    const saveEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((reponse) => {
            console.log(reponse);
            navigate('/employeeList');
        }).catch((error) => {
            console.log(error);
        })
    };

    const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
        });
    };

    const back = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/employeeList');
    };

    return (
        <div className='flex flex-row my-6'>
            <div className='absolute mx-4'>
                <button onClick={back} className='bg-blue-600 hover:bg-blue-800 py-2 px-6 rounded text-white font-semibold'>BACK</button>
            </div>
            <div className='flex max-w-2xl shadow border-b mx-auto'>
                <div className='px-8 py-8'>
                    <div className='font-thin text-2xl tracking-wider'>
                        <h1>Add new Employee</h1>
                    </div>
                    <div className='items-center justify-center h-14 w-full my-4'>
                        <label className='block text-gray-600 text-sm font-normal'>First name</label>
                        <input 
                        name='firstName' 
                        value={employee.firstName} 
                        onChange={(e) => handleChange(e)}
                        type='text' className='h-10 w-60 border mt-2 px-2 py-2 sm:w-96'></input>
                    </div>

                    <div className='items-center justify-center h-14 w-full my-4'>
                        <label className='block text-gray-600 text-sm font-normal'>Last name</label>
                        <input 
                        name='lastName' 
                        value={employee.lastName} 
                        onChange={(e) => handleChange(e)}
                        type='text' className='h-10 w-60 border mt-2 px-2 py-2 sm:w-96'></input>
                    </div>

                    <div className='items-center justify-center h-14 w-full my-4'>
                        <label className='block text-gray-600 text-sm font-normal'>Email</label>
                        <input 
                        name='emailId' 
                        value={employee.emailId} 
                        onChange={(e) => handleChange(e)}
                        type='email' className='h-10 w-60 border mt-2 px-2 py-2 sm:w-96'></input>
                    </div>

                    <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                        <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-600'>Save</button>
                        <button onClick={reset} className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-600'>Clear</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AddEmployee