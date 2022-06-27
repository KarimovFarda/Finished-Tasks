import React from "react";

export const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div>
                    <p>
                        На подпись
                        <span>5</span>
                    </p>
                </div>
                <div>
                    <p>
                        Отправленные в банк
                        <span>25</span>
                    </p>
                </div>
                <div>
                    <p>
                        Исполненные
                        <span>225</span>
                    </p>
                </div>
                <div>
                    <p>
                        Отклоненные
                        <span>1524</span>
                    </p>
                </div>
            </div>
            <div className="table-container">
                <div className="table-heading">
                    <h1>Cards</h1>
                    <div>
                        <p>All</p>
                        <div>
                            <span>USD</span>
                            <span>$ 2 000 000</span>
                        </div>
                        <div>
                            <span>RUR</span>
                            <span>50 000 000 ₽</span>
                        </div>
                        <div>
                            <span>AZN</span>
                            <span>50 000 ₼</span>
                        </div>
                    </div>
                </div>

<div>
                <table>
                    <thead>
                    <tr>
                        <th>Kartın adı
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H9" stroke="#9696AA" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M1 4H6" stroke="#9696AA" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M1 7H3" stroke="#9696AA" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </th>
                        <th>Kartın nömrəsi</th>
                        <th>Status</th>
                        <th>Növü</th>
                        <th>bİtmə tarİxİ</th>
                        <th className="align-right">balans</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>classNameic Premium</td>
                        <td>4353 54** **** 5465</td>
                        <td>Aktiv</td>
                        <td><svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.069 10.7179H6.9301V1.2836H12.069V10.7179Z" fill="#FF5F00" />
                            <path
                                d="M7.25927 5.99998C7.25927 4.08619 8.13643 2.38144 9.5024 1.28284C8.5035 0.47948 7.24284 -1.53134e-05 5.87276 -1.53134e-05C2.62924 -1.53134e-05 0 2.68623 0 5.99998C0 9.31374 2.62924 12 5.87276 12C7.24284 12 8.5035 11.5205 9.5024 10.7171C8.13643 9.61852 7.25927 7.91377 7.25927 5.99998Z"
                                fill="#EB001B" />
                            <path
                                d="M18.9996 5.99998C18.9996 9.31374 16.3704 12 13.1268 12C11.7568 12 10.4961 11.5205 9.49684 10.7171C10.8632 9.61852 11.7403 7.91377 11.7403 5.99998C11.7403 4.08619 10.8632 2.38144 9.49684 1.28284C10.4961 0.47948 11.7568 -1.53134e-05 13.1268 -1.53134e-05C16.3704 -1.53134e-05 18.9996 2.68623 18.9996 5.99998Z"
                                fill="#F79E1B" />
                        </svg>
                        </td>
                        <td>10/19</td>
                        <td>20 500 000 ₼</td>
                        <td><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="20" cy="12" rx="2" ry="2" transform="rotate(90 20 12)" fill="#B5B5BE" />
                            <circle cx="20" cy="20" r="2" transform="rotate(90 20 20)" fill="#B5B5BE" />
                            <circle cx="20" cy="28" r="2" transform="rotate(90 20 28)" fill="#B5B5BE" />
                        </svg>
                        </td>
                    </tr>
                    <tr>
                        <td>classNameic Premium</td>
                        <td>4353 54** **** 5465</td>
                        <td>Aktiv</td>
                        <td><svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.069 10.7179H6.9301V1.2836H12.069V10.7179Z" fill="#FF5F00" />
                            <path
                                d="M7.25927 5.99998C7.25927 4.08619 8.13643 2.38144 9.5024 1.28284C8.5035 0.47948 7.24284 -1.53134e-05 5.87276 -1.53134e-05C2.62924 -1.53134e-05 0 2.68623 0 5.99998C0 9.31374 2.62924 12 5.87276 12C7.24284 12 8.5035 11.5205 9.5024 10.7171C8.13643 9.61852 7.25927 7.91377 7.25927 5.99998Z"
                                fill="#EB001B" />
                            <path
                                d="M18.9996 5.99998C18.9996 9.31374 16.3704 12 13.1268 12C11.7568 12 10.4961 11.5205 9.49684 10.7171C10.8632 9.61852 11.7403 7.91377 11.7403 5.99998C11.7403 4.08619 10.8632 2.38144 9.49684 1.28284C10.4961 0.47948 11.7568 -1.53134e-05 13.1268 -1.53134e-05C16.3704 -1.53134e-05 18.9996 2.68623 18.9996 5.99998Z"
                                fill="#F79E1B" />
                        </svg>
                        </td>
                        <td>10/19</td>
                        <td>20 500 000 ₼</td>
                        <td><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="20" cy="12" rx="2" ry="2" transform="rotate(90 20 12)" fill="#B5B5BE" />
                            <circle cx="20" cy="20" r="2" transform="rotate(90 20 20)" fill="#B5B5BE" />
                            <circle cx="20" cy="28" r="2" transform="rotate(90 20 28)" fill="#B5B5BE" />
                        </svg>
                        </td>
                    </tr>
                    <tr>
                        <td>classNameic Premium</td>
                        <td>4353 54** **** 5465</td>
                        <td>Aktiv</td>
                        <td><svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.069 10.7179H6.9301V1.2836H12.069V10.7179Z" fill="#FF5F00" />
                            <path
                                d="M7.25927 5.99998C7.25927 4.08619 8.13643 2.38144 9.5024 1.28284C8.5035 0.47948 7.24284 -1.53134e-05 5.87276 -1.53134e-05C2.62924 -1.53134e-05 0 2.68623 0 5.99998C0 9.31374 2.62924 12 5.87276 12C7.24284 12 8.5035 11.5205 9.5024 10.7171C8.13643 9.61852 7.25927 7.91377 7.25927 5.99998Z"
                                fill="#EB001B" />
                            <path
                                d="M18.9996 5.99998C18.9996 9.31374 16.3704 12 13.1268 12C11.7568 12 10.4961 11.5205 9.49684 10.7171C10.8632 9.61852 11.7403 7.91377 11.7403 5.99998C11.7403 4.08619 10.8632 2.38144 9.49684 1.28284C10.4961 0.47948 11.7568 -1.53134e-05 13.1268 -1.53134e-05C16.3704 -1.53134e-05 18.9996 2.68623 18.9996 5.99998Z"
                                fill="#F79E1B" />
                        </svg>
                        </td>
                        <td>10/19</td>
                        <td>20 500 000 ₼</td>
                        <td><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="20" cy="12" rx="2" ry="2" transform="rotate(90 20 12)" fill="#B5B5BE" />
                            <circle cx="20" cy="20" r="2" transform="rotate(90 20 20)" fill="#B5B5BE" />
                            <circle cx="20" cy="28" r="2" transform="rotate(90 20 28)" fill="#B5B5BE" />
                        </svg>
                        </td>
                    </tr>
                    <tr>
                        <td>classNameic Premium</td>
                        <td>4353 54** **** 5465</td>
                        <td>Aktiv</td>
                        <td><svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.069 10.7179H6.9301V1.2836H12.069V10.7179Z" fill="#FF5F00" />
                            <path
                                d="M7.25927 5.99998C7.25927 4.08619 8.13643 2.38144 9.5024 1.28284C8.5035 0.47948 7.24284 -1.53134e-05 5.87276 -1.53134e-05C2.62924 -1.53134e-05 0 2.68623 0 5.99998C0 9.31374 2.62924 12 5.87276 12C7.24284 12 8.5035 11.5205 9.5024 10.7171C8.13643 9.61852 7.25927 7.91377 7.25927 5.99998Z"
                                fill="#EB001B" />
                            <path
                                d="M18.9996 5.99998C18.9996 9.31374 16.3704 12 13.1268 12C11.7568 12 10.4961 11.5205 9.49684 10.7171C10.8632 9.61852 11.7403 7.91377 11.7403 5.99998C11.7403 4.08619 10.8632 2.38144 9.49684 1.28284C10.4961 0.47948 11.7568 -1.53134e-05 13.1268 -1.53134e-05C16.3704 -1.53134e-05 18.9996 2.68623 18.9996 5.99998Z"
                                fill="#F79E1B" />
                        </svg>
                        </td>
                        <td>10/19</td>
                        <td>20 500 000 ₼</td>
                        <td><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="20" cy="12" rx="2" ry="2" transform="rotate(90 20 12)" fill="#B5B5BE" />
                            <circle cx="20" cy="20" r="2" transform="rotate(90 20 20)" fill="#B5B5BE" />
                            <circle cx="20" cy="28" r="2" transform="rotate(90 20 28)" fill="#B5B5BE" />
                        </svg>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div className="aside">
                <div>
                    <div>
                        <img src="images/pagesIcon1.svg" alt="" />
                    </div>
                    <p>Dashboard</p>
                </div>

                <div>
                    <div>
                        <img src="images/pagesIcon2.svg" alt="" />
                    </div>
                    <p>Payments</p>
                </div>
                <div>
                    <div>
                        <img src="images/pagesIcon3.svg" alt="" />
                    </div>
                    <p>Payroll</p>
                </div>
                <div>
                    <div>
                        <img src="images/pagesIcon4.svg" alt="" />
                    </div>
                    <p>Templates</p>
                </div>
                <div>
                    <div>
                        <img src="images/pagesIcon5.svg" alt="" />
                    </div>
                    <p>History</p>
                </div>
                <div>
                    <div className="active">
                        <img src="images/pagesIcon6.svg" alt="" />
                    </div>
                    <p>Products</p>
                </div>
                <div>
                    <div>
                        <img src="images/pagesIcon7.svg" alt="" />
                    </div>
                    <p>Express POS</p>
                </div>
                <div>
                    <div>
                        <img src="images/pagesIcon8.svg" alt="" />
                    </div>
                    <p>Ani Pay</p>
                </div>
                <div>
                    <div>
                        <img src="images/pagesIcon9.svg" alt="" />
                    </div>
                    <p>Map</p>
                </div>
            </div>
        </div>
    )
}

export default Main