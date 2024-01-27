import React from 'react'
import convertToVND from '../utils/convertToVND'
import Spinner from '../features/common/Spinner'
import { AuthContext } from '../contexts/authContext'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { updateUser } from '../services/users'

const Profile = () => {
    const { currentUser, isLoading } = React.useContext(AuthContext)
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        try {
            const res = await updateUser(data)

            if (res.status === 'success'){
                toast.success('Cập nhật thành công')
                window.location.reload()
            }
            else
                toast.error('Cập nhật thất bại')
        }
        catch (err){
            toast.error('Có lỗi xảy ra, vui lòng thử lại')
        }
    }

    if (isLoading)
        return <Spinner />


  return (
    <div className='mx-auto lg:px-20'>
        <div className='bg-orange-50 p-8'>
            <div className='border-b pb-4'>
                <p className='text-3xl font-bold'>Hồ sơ của tôi</p>
                <span className='text-slate-600'>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
            </div>
            <div className='md:grid gap-x-10 gap-y-6 grid-cols-3 p-10'>
                <div className='md:col-span-1 text-left md:text-right leading-10'>
                    Họ và tên
                </div>
                <div className='md:col-span-2'>
                    <input 
                        className='md:w-96 w-60 p-4 h-10 border border-gray-300 rounded-md'
                        {
                            ...register('name', { required: true, value: currentUser.name },)
                        } />
                </div>
                <div className='md:col-span-1 text-left md:text-right leading-10'>
                    Email
                </div>
                <div className='md:col-span-2'>
                    <span className='leading-10'>
                        deptrai@123
                    </span>
                </div>
                <div className='md:col-span-1 text-left md:text-right leading-10'>
                    Địa chỉ
                </div>
                <div className='md:col-span-2'>
                    <textarea spellCheck="false" type='text' className='md:w-96 w-60 p-4 h-20 border border-gray-300 rounded-md' 
                        {
                            ...register('address', { required: true, value: currentUser.address },)
                        } />
                </div>
                <div className='md:col-span-1 text-left md:text-right leading-10'>
                    Số dư khả dụng
                </div>
                <span className='leading-10'>
                    {convertToVND(100000)}
                </span>
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={handleSubmit(onSubmit)}
                    className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded-md'>
                    Lưu
                </button>
            </div>
        </div>
    </div>
  )
}

export default Profile