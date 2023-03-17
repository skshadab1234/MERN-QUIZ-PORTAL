import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Table, Button, Modal, Form, Input, message, Radio, Pagination, Switch } from 'antd';

const user_settings = ({ token }) => {
  const router = useRouter()
  const [userdata, setuserdata] = useState([])
  const [Settingloading, setSettingloading] = useState(true)
  const [searchUsers, setsearchUsers] = useState('');
  const [filteredUsers, setFilteredUsers] = useState();

  const columns = [
    {
      title: 'SR No',
      dataIndex: 'sr_no',
      key: 'sr_no',
      render: (_, record, index) => index + 1,
    },
    {
      title: 'Batch No',
      dataIndex: 'myround_no',
      key: 'myround_no',
      sorter: (a, b) => a.myround_no - b.myround_no
    },
    {
      title: 'candidate_name',
      dataIndex: 'candidate_name',
      key: 'candidate_name',
      sorter: (a, b) => a.candidate_name.localeCompare(b.candidate_name),
      width: 150
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'YearofStudy',
      dataIndex: 'YearofStudy',
      key: 'YearofStudy',
      sorter: (a, b) => a.YearofStudy.localeCompare(b.YearofStudy),
    },
    {
      title: 'Semester',
      dataIndex: 'Semester',
      key: 'Semester',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => (
        <Radio.Group defaultValue={status} onChange={(e) => handleStatusChange(e, record._id)} >
          <Radio value={1} className="form-radio text-green-500" > Active</Radio>
          <Radio value={0} className="text-red-500">Inactive</Radio>
        </Radio.Group>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <>
          <Button onClick={() => handleUpdate(record._id)} className="text-white bg-green-500 border-none hover:bg-green-600 hover:text-white ">Edit</Button>
          <Button onClick={() => handleDelete(record._id)} className="text-white bg-red-500 border-none hover:bg-red-500 hover:text-white ml-2">Delete</Button>
        </>
      ),
    },
  ];

  const handleStatusChange = (e, _id) => {
    const newStatus = e.target.value;
    // Handle status change logic here
    console.log(newStatus, _id);
    const changeStatus = async () => {
      try {
        const res = await fetch("/changeStatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            newStatus, _id
          })
        })

        const data = await res.json();
        console.log(data)
        if (data.status == 200) {
          message.success(data.message)
        } else {
          message.error(data.message)
        }

      } catch (error) {
        console.log(error)
      }
    }

    // Caling Add Candidate Function
    changeStatus();
  };

  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const [data, setData] = useState();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [Loading, setLoading] = useState(true);

  const [passowrdUpdate, setpassowrdUpdate] = useState({
    newPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setpassowrdUpdate({
      ...passowrdUpdate,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add code to update the user's password
    console.log(passowrdUpdate)

    const updatePassword = async () => {
      try {
        const res = await fetch("/updatePassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            passowrdUpdate
          })
        })

        const data = await res.json();
        // console.log(data)
        if (data.status == 200) {
          message.success(data.message)
        } else {
          message.error(data.message)
        }

      } catch (error) {
        console.log(error)
      }
    }

    // Caling Add Candidate Function
    updatePassword();
  };

  const callData = async () => {
    try {
      const response = await fetch("/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      }
      )
      const data = await response.json();
      if (!data.status === 200) {
        throw new Error(data.error)
        router.push("/Login")
      } else {
        setuserdata(data)
        setSettingloading(false)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    callData()
  }, [])

  useEffect(() => {
    const callCandidate = async () => {
      try {
        const req = await fetch('/allUsers', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
        })
          .then(response => response.json())
          .then(jsonData => { setData(jsonData); setFilteredUsers(jsonData); setLoading(false) })
          .catch(error => console.error(error))

      } catch (error) {
        console.log(error);
      }
    }

    callCandidate();
  }, [])

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  function handleCreate() {
    form.resetFields();
    setModalVisible(true);
    setSelectedKey(null);
  }

  function handleUpdate(key) {
    const selectedRow = data.find(item => item._id === key);
    form.setFieldsValue(selectedRow);
    setModalVisible(true);
    setSelectedKey(key);
  }

  function handleDelete(key) {
    setSelectedKey(key);
    setDeleteModalVisible(true);
    // setData(data.filter(item => item.key !== key));
  }

  const handleDeleteModalOk = () => {
    setData(data.filter((item) => item._id !== selectedKey));
    setDeleteModalVisible(false);
    const DeleteCandidate = async () => {
      try {
        const res = await fetch("/delete_candidate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            selectedKey
          })
        })

        const data = await res.json();
        // console.log(data)
        if (data.status == 200) {
          message.success("Candidate Deleted Successfully")
        } else {
          message.error("Something Went Wrong")
        }

      } catch (error) {
        console.log(error)
      }
    }

    // Caling Add Candidate Function
    DeleteCandidate();

  };

  const handleDeleteModalCancel = () => {
    setDeleteModalVisible(false);
  };

  function handleSave() {
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        setModalVisible(false);

        if (selectedKey === null) {
          setData([
            ...data,
            {
              _id: data.length + 1,
              ...values,
            },
          ]);

          const addCandidate = async () => {
            try {
              const res = await fetch("/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  values, insertType: 'table'
                })
              })

              const data = await res.json();
              console.log(data)
              if (data.status == 200) {
                message.success("Candidate Added Successfully")
              } else {
                message.error("Something Went Wrong")
              }

            } catch (error) {
              console.log(error)
            }
          }

          // Caling Add Candidate Function
          addCandidate();

        } else {
          console.log('update');
          setData(
            data.map(item =>
              item._id === selectedKey ? { ...item, ...values } : item
            )
          );
          // console.log({selectedKey, values})
          // Update Candidate Request 
          const updateCandidate = async () => {
            try {
              const res = await fetch("/update_candidate", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  selectedKey, values
                })
              })

              const data = await res.json();
              // console.log(data)
              if (data.status == 200) {
                message.success("Candidate Updated Successfully")
              } else {
                message.error("Something Went Wrong")
              }

            } catch (error) {
              console.log(error)
            }
          }

          // Caling Add Candidate Function
          updateCandidate();
        }


      })

      .catch(info => {
        console.log('Validate Failed:', info);
      });
  }

  const handleSearch = (event) => {
    setsearchUsers(event.target.value)
    if (searchUsers != '') {
      setData(filteredUsers.filter(user => user.candidate_name.toLowerCase().includes(event.target.value.toLowerCase())));
    } else {
      setData(filteredUsers);
    }
  }

  return (
    <>
      {
        Settingloading ? <div className='flex justify-center h-80 place-items-center'>
          <svg class="inline mr-2 w-40 h-40 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div> :
          userdata.email == 'ks615044@gmail.com' ?
            <>
              <Head>
                <title>Setting - CESA -CSMIT</title>
                <link rel="icon" type="image/x-icon" href='logo-sm.jpg' />
              </Head>

              <div className='md:container md:mx-auto mb-10'>
                <Header token={token} />
                <div className='flex justify-center'>
                  <Button onClick={handleCreate} className="text-gray-300">Add New Candidate</Button>
                </div>
                <div className='mt-10 grid justify-items-end mb-4'>
                  <div className='w-75'></div>
                  <div className='w-25 flex-1'>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="searchUsers"
                      type="text" value={searchUsers} onChange={handleSearch}
                      placeholder="Search.."
                    />
                  </div>
                </div>
                <div id="pdf-table">
                  <p className='text-2xl text-gray-200'>Total Students: {data?.length}</p>
                  <Table columns={columns}
                    dataSource={data}
                    pagination={false}
                    className="table-responsive w-full "
                    rowClassName="bg-slate-800 no-hover text-gray-200 hover:text-slate-400 rounded-none border-b-2 border-zinc-300" />
                </div>

                <div className='mt-10'>
                  <h1 className='text-2xl text-gray-200 text-center'> Password Change</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="newPassword"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        New Password
                      </label>
                      <input
                        type="text"
                        id="newPassword"
                        name="newPassword"
                        value={passowrdUpdate.newPassword}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Update Password
                    </button>
                  </form>
                </div>
              </div>
              <Modal
                title={selectedKey === null ? 'Create Candidate' : 'Update Candidate'}
                visible={modalVisible}
                onOk={handleSave}
                onCancel={() => setModalVisible(false)}
                okButtonProps={{ disabled: false }}

              >
                <Form form={form} className="mt-10">
                  <Form.Item name="candidate_name" label="candidate_Name">
                    <Input />
                  </Form.Item>
                  <Form.Item name="email" label="email">
                    <Input />
                  </Form.Item>
                  <Form.Item name="YearofStudy" label="YearofStudy">
                    <Input />
                  </Form.Item>
                  <Form.Item name="Semester" label="Semester">
                    <Input />
                  </Form.Item>
                  <Form.Item name="myround_no" label="Batch No">
                    <Input />
                  </Form.Item>

                </Form>
              </Modal>

              <Modal
                title="Confirm Delete"
                visible={deleteModalVisible}
                onOk={handleDeleteModalOk}
                onCancel={handleDeleteModalCancel}
              >
                <p>Are you sure you want to delete this row?</p>
              </Modal>


            </> : <>
              <Head>
                <title>Unauthorized Page</title>
                <link rel="icon" type="image/x-icon" href='logo-sm.jpg' />
              </Head>
              <div className='md:container md:mx-auto mb-10'>
                <Header token={token} />

                <div className='flex justify-center relative top-56'>
                  <div className='text-center tracking-wide'>
                    <h3 className='text-white text-4xl'>You are not an authorized user to visit this page.</h3>
                    <h3 className='text-white text-4xl'>Go back to
                      <Link href="/">
                        <a className='text-blue-500'> Homepage</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </>
      }
    </>
  )
}

export default user_settings