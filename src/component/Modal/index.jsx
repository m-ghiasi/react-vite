

export default function Modal(prop){
    return(
        <div className="fixed left-0 top-0 bottom-0 right-0 bg-gray-50 flex justify-center items-center">

            <div className="bg-red-500 rounded-2xl min-h-36 min-w-48">

                {prop.children}



            </div>

        </div>
    )
}