import { Fragment, useContext, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

export default function Header({ token }) {
  const [userdata, setuserdata] = useState([])
  const [profileLoading, setProfileLoading] = useState(true)
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
        throw new Error(data.error);
      } else {
        setuserdata(data);
        setProfileLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    callData()
  }, [])

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (

    <Disclosure as="nav" className={"sticky top-0 dark_bg z-[99]"}>
      <>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <div className=" px-2 sm:px-6">
          <div className="relative flex justify-between">
            <div className="flex-1 flex   h-24">
              <div className="flex-shrink-0 flex ">
                <Link href="/">
                  <img
                    className="block h-20 relative top-3 w-auto cursor-pointer"
                    src="../web-logo.png"
                    alt="C E S A Logo"
                  />
                </Link>
                {/* <Link href="/">
                  <img
                    className="hidden lg:block h-8 w-auto cursor-pointer"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                  </Link> */}
              </div>

            </div>

            {token == '' ? <>
            </> :
              <>
                <div id="profileIcon" className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto">

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative md:w-full w-44 top-0 md:w-full">
                    <div>
                      <Menu.Button className="text-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white relative top-0">
                        <span className="sr-only">Open user menu</span>
                        {
                          profileLoading ? <>
                            <div className='flex justify-center  place-items-center relative top-0'>
                              <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                              </svg>
                              <span class="sr-only">Loading...</span>
                            </div>
                          </> : <>

                            <img
                              className="h-6 w-6 md:w-8  md:h-8 rounded-full"
                              src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                              alt=""
                            /> <h2 className='mt-[2px] ml-2 md:ml-3 md:mt-[5px] text-gray-200 text-ellipsis overflow-hidden truncate text-sm md:text-[16px] '>{userdata.candidate_name}</h2>
                          </>
                        }
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/Profile">
                              <a
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Your Profile
                              </a>
                            </Link>

                          )}
                        </Menu.Item>

                        {
                          userdata.email == 'ks615044@gmail.com' ? <Menu.Item>
                            {({ active }) => (
                              <Link href="../user_settings/user_settings">
                                <a
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  Settings
                                </a>
                              </Link>
                            )}
                          </Menu.Item> : ''
                        }

                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/Logout">
                              <a
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Sign out
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </>
            }
          </div>
        </div>
            
      </>
    </Disclosure>
  )
}

