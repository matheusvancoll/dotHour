'use client'

import React, { useState } from "react";
import styles from './homepage.module.css'

export default function Home() {

    const [tipoContrato, setTipoContrato] = useState('clt')

    return (
        <div className={`${styles.homepagePrimaryContainer} ${tipoContrato == 'estagio' ? styles.estagiobg : styles.cltbg}`}>
            <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
                <input type="checkbox" name="themeSwitcherOne" id="themeSwitcherOne" className="sr-only" />
                <span className={`rounded-xl duration-500 py-4 px-8 text-2xl font-medium ${tipoContrato == 'estagio' ? '' : styles.selectRecorrencia}`}
                    onClick={() => setTipoContrato('clt')}>
                    CLT
                </span>

                <span className={`rounded-xl duration-500 py-4 px-8 text-2xl font-medium ${tipoContrato == 'estagio' ? styles.selectRecorrencia : ''}`}
                    onClick={() => setTipoContrato('estagio')}>
                    Estágio
                </span>
            </label>


            {/* <div class="relative max-w-sm">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </div>
                <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
            </div> */}


            <div class="mt-2 p-5 w-22 bg-white rounded-lg shadow-xl">
                <div class="flex">
                    <select name="hours" class="bg-transparent text-xl appearance-none outline-none">
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">10</option>
                        <option value="12">12</option>
                        <option value="12">13</option>
                        <option value="12">14</option>
                        <option value="12">15</option>
                        <option value="12">16</option>
                        <option value="12">17</option>
                        <option value="12">18</option>
                        <option value="12">19</option>
                        <option value="12">20</option>
                        <option value="12">21</option>
                        <option value="12">22</option>
                        <option value="12">23</option>
                    </select>
                    <span class="text-xl mr-3">:</span>
                    <select name="minutes" class="bg-transparent text-xl appearance-none outline-none mr-4">
                        <option value="0">00</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
