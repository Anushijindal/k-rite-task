import React, { useState } from "react";

const Products = () => {
    const [val,setVal]=useState(0);
    const [brand,setBrand]=useState("");
    const handlecheck=(e)=>{
        const isChecked=e.target.checked;
        if(isChecked){
        setVal(val+1);}
        else{
            setVal(val-1);
        }
    }
    console.log(val);
    const handleBrand=(e)=>{
        setBrand(e.target.value);
    }
    console.log(brand)
  return (
    <div className="">
      <div className="flex flex-row justify-between border-b-2 border-gray-100 ">
        <div className="m-2 text-xl">
          <h1>Products</h1>
        </div>
        <div>
          <input
            className="border-2 border-gray-100 m-2 rounded-md px-3"
            type="text"
            placeholder="🔍 Search for..."
          />
          <button className="border-2 border-gray-100 m-2 rounded-md px-1">
            🗂
          </button>
          <button className="border-2 border-gray-100 m-2 rounded-md px-1">
            ⚙️
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <button className="border-2 border-gray-100 m-2 rounded-md px-1 hover:bg-gray-300 hover:p-0.5">
            <img
              className="w-3 float-left mt-1.5 mr-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCvfYNyf_CSGMJxxs9IOUojDtpYzaZysTcw&s"
              alt="logo"
            />
            <select className="hover:bg-gray-300" value={brand} onChange={handleBrand}>
                <option value={""}>All Brands</option>
                <option value={"Wix"}>Wix</option>
                <option value={"Shopify"}>Shopify</option>
                <option value={"MailChimp"}>MailChimp</option>
                <option value={"PayPal"}>PayPal</option>
                <option value={"Disney"}>Disney</option>
                <option value={"InterCom"}>InterCom</option>
                <option value={"Google"}>Google</option>
                <option value={"Evernote"}>Evernote</option>
                <option value={"Microsoft"}>Microsoft</option>
                <option value={"Invision"}>Invision</option>
            </select>
          </button>
          <button className="border-2 border-gray-100 m-2 rounded-md px-1 hover:bg-gray-300 hover:p-0.5">
            Desk ▾
          </button>
          <button className="border-2 border-gray-100 m-2 rounded-md px-1 hover:bg-gray-300 hover:p-0.5">
            Tags ▾
          </button>
          <button className="border-2 border-gray-100 m-2 rounded-md px-1 hover:bg-gray-300 hover:p-0.5">
            <img
              className="w-3 float-left mt-1.5 mr-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTy1Hw0PIqF4jwKS6QDeL5XcIDbmcdgvKO4g&s"
              alt="logo"
            />
            Sort
          </button>
          <button className="border-2 border-gray-100 m-2 rounded-md px-1 hover:bg-gray-300 hover:p-0.5">
            <img
              className="w-3 float-left mt-1.5 mr-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre8x_j0hbFQVRs-cqBUDNwtqaXsfaJbQxDg&s"
              alt="logo"
            />
            Filter
          </button>
        </div>
        <div>
          <button className="border-2 border-gray-100 m-2 rounded-md px-1 hover:bg-gray-300 hover:p-0.5">
            <img
              className="w-3 float-left mt-1.5 mr-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6J6TIZyIcovZklIIdfOjE5NPRLPgPFqcQ_Q&s"
              alt="logo"
            />
            Meeting
          </button>
          <button className="border-2 border-gray-100 m-2 rounded-md px-1 hover:bg-gray-300 hover:p-0.5">
            <img
              className="w-3 float-left mt-1.5 mr-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1VJQZmwc3tBMCgdTcOFEmhUL9EGX3eq7Zg&s"
              alt="logo"
            />
            Import/Export
          </button>
        </div>
      </div>
      <div className="m-2 overflow-hidden">
        <table className="table-auto">
        <thead>
          <tr>
            <th className="w-1/6 border-2 border-gray-100">Brand</th>
            <th className="w-1/6 border-2 border-gray-100">Description</th>
            <th className="w-1/6 border-2 border-gray-100">Members</th>
            <th className="w-1/6 border-2 border-gray-100">Categories</th>
            <th className="w-1/6 border-2 border-gray-100">Tags</th>
            <th className="w-1/6 border-2 border-gray-100">New Meeting</th>
            <th className="w-1/6 border-2 border-gray-100 px-1">+</th>
          </tr>
          </thead>
          {
            
          
          <tbody>
          {
            (brand==="" || brand==="Wix") &&
          
          <tr>
          <td className="w-1/6 border-2 border-gray-100">
              <input className="float-left mt-3 ml-2" type="checkbox" onChange={handlecheck}/>
              <img
                className="w-6 mx-2 float-left mt-1.5"
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgn-DzVvaOOdNN2mIbg_oTDONtWdkmFDPNmQ&s"
              />
              <h1 className="mt-1.5">Wix</h1>
            </td>
            <td className="w-1/6 h-2 border-2 border-gray-100">
              Lorem ipsum dolor sit{" "}
            </td>
            <td className="w-1/6 border-2 border-gray-100">
            <div className="flex flex-row">
            <img className="w-9 rounded-full float-left border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-4 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-8 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-12 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-16 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full -left-20 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            </div>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 bg-purple-300 text-purple-700 m-2 rounded-md px-1">
                Automation
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #DigitalTransformation
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-green-300 text-green-700 border-2 border-gray-100 m-2 rounded-md px-1">
                in 30 minutes
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100 px-1"></td>
          </tr>
          }
          {
            (brand==="" || brand==="Shopify") &&
          <tr>
            <td className="w-1/6 border-2 border-gray-100">
              <input className="float-left mt-3 ml-2" type="checkbox" onChange={handlecheck}/>
              <img
                className="w-6 mx-2 float-left mt-1.5"
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMvC6tj73fLX9Ct3l9odBEWpK9HS-aqTJxDVBZbQbq2XflkjOvMpSzLOdCGm6E5ZEhLDs&usqp=CAU"
              />
              <h1 className="mt-1.5">Shopify</h1>
            </td>
            <td className="w-1/6 h-2 border-2 border-gray-100">
              Lorem ipsum dolor{" "}
            </td>
            <td className="w-1/6 border-2 border-gray-100">
            <div className="flex flex-row">
            <img className="w-9 rounded-full float-left border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-4 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-8 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-12 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            </div>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 bg-orange-300 text-orange-700 m-2 rounded-md px-1">
                E-commerce
              </button>
              <button className="border-2 border-gray-100 bg-amber-300 text-amber-700 m-2 rounded-md px-1">
                B2B
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #OnlineShopping
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-teal-300 text-teal-700 border-2 border-gray-100 m-2 rounded-md px-1">
                tomorrow
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100 px-1"></td>
          </tr>
          }
          {
            (brand==="" || brand==="MailChimp") &&
          <tr>
            <td className="w-1/6 border-2 border-gray-100">
              <input className="float-left mt-3 ml-2" type="checkbox" onChange={handlecheck}/>
              <img
                className="w-6 mx-2 float-left mt-1.5"
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0oiqjQhJ_WIrhTm-8BdnCMKixXBfSG91RKYfpj8aQ9aw8Lds5CoZOuAG8nf3WSrI2zJg&usqp=CAU"
              />
              <h1 className="mt-1.5">MailChimp</h1>
            </td>
            <td className="w-1/6 h-2 border-2 border-gray-100">
              Lorem ipsum dolor sit{" "}
            </td>
            <td className="w-1/6 border-2 border-gray-100">
            <div className="flex flex-row">
            <img className="w-9 rounded-full float-left border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-4 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-8 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-12 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            </div>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-lime-300 text-lime-700 border-2 border-gray-100 m-2 rounded-md px-1">
                SAAS
              </button>
              <button className="bg-emerald-300 text-emerald-700 border-2 border-gray-100 m-2 rounded-md px-1">
                Mobile
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #TechInnovation
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-teal-300 text-teal-700 border-2 border-gray-100 m-2 rounded-md px-1">
                tomorrow
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100 px-1"></td>
          </tr>
          }
          {
            (brand==="" || brand==="PayPal") &&
          <tr>
          <td className="w-1/6 border-2 border-gray-100">
              <input className="float-left mt-3 ml-2" type="checkbox" onChange={handlecheck}/>
              <img
                className="w-6 mx-2 float-left mt-1.5"
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7IIPBzHLzZlALYAJ1leb-EWu7T6BB_-CwUiV9EsEy-awt6akmYrfzKiVqAJZy0mIK_o&usqp=CAU"
              />
              <h1 className="mt-1.5">PayPal</h1>
            </td>
            <td className=" w-1/6 h-2 border-2 border-gray-100">
              Lorem ipsum dolor sit{" "}
            </td>
            <td className="w-1/6 border-2 border-gray-100">
            <div className="flex flex-row">
            <img className="w-9 rounded-full float-left border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-4 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-8 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-12 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-16 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full -left-20 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            </div>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 bg-green-300 text-green-700 m-2 rounded-md px-1">
                MarketPlace
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #BuySellOnline
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-emerald-300 text-emerald-700 border-2 border-gray-100 m-2 rounded-md px-1">
                in 6 hours
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100 px-1"></td>
          </tr>
          }
          {
            (brand==="" || brand==="Disney") &&
          <tr>
          <td className="w-1/6 border-2 border-gray-100">
              <input className="float-left mt-3 ml-2" type="checkbox" onChange={handlecheck}/>
              <img
                className="w-6 mx-2 float-left mt-1.5"
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FGg2LOQy4Y4Ll2VbWkG2HYXqAl2YWXUOnA&s"
              />
              <h1 className="mt-1.5">Disney</h1>
            </td>
            <td className="w-1/6 h-2 border-2 border-gray-100">
              Lorem ipsum dolor sit{" "}
            </td>
            <td className="w-1/6 border-2 border-gray-100">
            <div className="flex flex-row">
            <img className="w-9 rounded-full float-left border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-4 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            </div>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 bg-amber-300 text-amber-700 m-2 rounded-md px-1">
                B2B
              </button>
              <button className="bg-yellow-300 text-yellow-700 border-2 border-gray-100 m-2 rounded-md px-1">
                B2C
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #BusinessPartnerships
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-red-300 text-red-700 border-2 border-gray-100 m-2 rounded-md px-1">
                no contact
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100 px-1"></td>
          </tr>
          }
          {
            (brand==="" || brand==="InterCom") &&
          <tr>
          <td className="w-1/6 border-2 border-gray-100">
              <input className="float-left mt-3 ml-2" type="checkbox" onChange={handlecheck}/>
              <img
                className="w-6 mx-2 float-left mt-1.5"
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0l6N_ksLnWvnSz8TadpxveHP3JcMKDmkEg&s"
              />
              <h1 className="mt-1.5">InterCom</h1>
            </td>
            <td className="w-1/6 h-2 border-2 border-gray-100">
              Lorem ipsum dolor sit{" "}
            </td>
            <td className="w-1/6 border-2 border-gray-100">
            <div className="flex flex-row">
            <img className="w-9 rounded-full float-left border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-4 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-8 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-12 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-16 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            </div>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-cyan-300 text-cyan-700 border-2 border-gray-100 m-2 rounded-md px-1">
                Technology
              </button>
              <button className="border-2 border-gray-100 bg-lime-300 text-lime-700 m-2 rounded-md px-1">
                SAAS
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #SmartFinance
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-lime-300 text-lime-700 border-2 border-gray-100 m-2 rounded-md px-1">
                in 1 hour
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100 px-1"></td>
          </tr>
          }
          {
            (brand==="" || brand==="Google") &&
          <tr>
          <td className="w-1/6 border-2 border-gray-100">
              <input className="float-left mt-3 ml-2" type="checkbox" onChange={handlecheck}/>
              <img
                className="w-6 mx-2 float-left mt-1.5"
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGGc9sjnh2EIpQYqwFwrTVcExCMwwnV-hog&s"
              />
              <h1 className="mt-1.5">Google</h1>
            </td>
            <td className="w-1/6 h-2 border-2 border-gray-100">
              Lorem ipsum dolor sit{" "}
            </td>
            <td className="w-1/6 border-2 border-gray-100">
            <div className="flex flex-row">
            <img className="w-9 rounded-full float-left border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-4 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-8 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-12 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-16 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full -left-20 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full -left-24 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full -left-28 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            </div>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-red-300 text-red-700 border-2 border-gray-100 m-2 rounded-md px-1">
                Finance
              </button>
              <button className="border-2 bg-purple-300 text-purple-700 border-gray-100 m-2 rounded-md px-1">
                Automation
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #SmartFinance
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-green-300 text-green-700 border-2 border-gray-100 m-2 rounded-md px-1">
                in 30 minutes
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100 px-1"></td>
          </tr>
          }
          {
            (brand==="" || brand==="Evernote") &&
          <tr>
          <td className="w-1/6 border-2 border-gray-100">
              <input className="float-left mt-3 ml-2" type="checkbox" onChange={handlecheck}/>
              <img
                className="w-6 mx-2 float-left mt-1.5"
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7vFFKgfwCnqDgj6pHue_3TcoK3A3EcjgOQ&s"
              />
              <h1 className="mt-1.5">Evernote</h1>
            </td>
            <td className="w-1/6 h-2 border-2 border-gray-100">
              Lorem ipsum dolor sit{" "}
            </td>
            <td className="w-1/6 border-2 border-gray-100">
            <div className="flex flex-row">
            <img className="w-9 rounded-full float-left border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-4 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-8 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            </div>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-rose-300 text-rose-700 border-2 border-gray-100 m-2 rounded-md px-1">
                Transportation
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #LogisticsTech
              </button>
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #UX
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-gray-300 text-gray-700 border-2 border-gray-100 m-2 rounded-md px-1">
                next month
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100 px-1"></td>
          </tr>
          }
          {
            (brand==="" || brand==="Microsoft") &&
          <tr>
          <td className="w-1/6 border-2 border-gray-100">
              <input className="float-left mt-3 ml-2" type="checkbox" onChange={handlecheck}/>
              <img
                className="w-6 mx-2 float-left mt-1.5"
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4h-BOq7dYwjZSE0uBn28DFXAHvIwhf3sRAg&s"
              />
              <h1 className="mt-1.5">Microsoft</h1>
            </td>
            <td className="w-1/6 h-2 border-2 border-gray-100">
              Lorem ipsum dolor sit{" "}
            </td>
            <td className="w-1/6 border-2 border-gray-100">
            <div className="flex flex-row">
            <img className="w-9 rounded-full float-left border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-4 border-2 border-green-100" alt=" " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-8 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-12 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-16 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            </div>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-pink-300 text-pink-700 border-2 border-gray-100 m-2 rounded-md px-1">
                Publishing
              </button>
              <button className="bg-yellow-300 text-yellow-700 border-2 border-gray-100 m-2 rounded-md px-1">
                B2C
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #B2CMarketing
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-red-300 text-red-700 border-2 border-gray-100 m-2 rounded-md px-1">
                no contact
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100 px-1"></td>
          </tr>
          }
          {
            (brand==="" || brand==="Invision") &&
          
          <tr>
          <td className="w-1/6 border-2 border-gray-100">
              <input className="float-left mt-3 ml-2" type="checkbox" onChange={handlecheck}/>
              <img
                className="w-6 mx-2 float-left mt-1.5"
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUsLpRjMBIVjGHyZ4h0LCbfy3026NiITQAw&s"
              />
              <h1 className="mt-1.5">Invision</h1>
            </td>
            <td className="w-1/6 h-2 border-2 border-gray-100">
              Lorem ipsum dolor sit{" "}
            </td>
            <td className="w-1/6 border-2 border-gray-100">
            <div className="flex flex-row">
            <img className="w-9 rounded-full float-left border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            <img className="relative w-9 rounded-full float-left -left-4 border-2 border-green-100" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"/>
            </div>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-teal-300 text-teal-700 border-2 border-gray-100 m-2 rounded-md px-1">
                Web Services
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="border-2 border-gray-100 m-2 rounded-md px-1">
                #APIIntegration
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100">
              <button className="bg-gray-300 text-gray-700 border-2 border-gray-100 m-2 rounded-md px-1">
                next month
              </button>
            </td>
            <td className="w-1/6 border-2 border-gray-100 px-1"></td>
          </tr>
          }
          </tbody>
          }
        </table>
      </div>
      <div className="w-1/3 border-2 ml-auto mr-auto mt-48 border-gray-100 mb-3">
      <button className="border-2 border-gray-100 m-2 rounded-md px-1"><h1 className="bg-black text-white px-1 float-left mr-1 rounded-md">{val}</h1> Selected</button>
      <button className="border-2 border-gray-100 m-2 rounded-md px-1">Archieve</button>
      <button className="border-2 border-gray-100 m-2 rounded-md px-1 text-red-700">🗑️ Delete</button>
      <button className="border-2 border-gray-100 m-2 rounded-md px-1">More</button>
      </div>
    </div>
  );
};

export default Products;
