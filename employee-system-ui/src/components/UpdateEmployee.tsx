import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [employee, setEmployee] = React.useState({
        id: Number(id),
        firstName: "",
        lastName: "",
        emailId: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try 
            {
                const response = await EmployeeService.getEmployeeById(employee.id);
                setEmployee(response.data);
            }
            catch (error)
            {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    };

    const updateEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee.id, employee)
            .then((response) => {
                navigate('/employeeList');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='flex flex-row my-6'>
            <div className='flex max-w-2xl shadow border-b mx-auto'>
                <div className='px-8 py-8'>
                    <div className='font-thin text-2xl tracking-wider'>
                        <h1>Update Employee</h1>
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
                        <button onClick={(e) => updateEmployee(e)} className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-600'>Update</button>
                        <button onClick={() => navigate("/employeeList")} className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-600'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployee