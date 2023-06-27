import React from 'react'

function AppraisalsList({apr,link}) {
  return (
    <a className='w-auto' href={`${link}`} target="_new">
    <div className="each flex hover:shadow-lg select-none p-5 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer">
        <div className="left">
            <div className="header text-gray-800 font-semibold text-2xl">{`${apr.id}}`}</div>
            <div className="desc text-gray-600">{`${apr.created_at}`} </div>
        </div>
        <div className="right m-auto mr-0">
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
        </div>
    </div>
</a>
  )
}

export default AppraisalsList