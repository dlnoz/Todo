
import { Contact, Email, FaceBook, GooglePlus, Password, Twitter } from "../../assets/images"
import "./form.css"

function Form(){
    return(
        <div className="todo-form bg-[#3AAF9F] h-[825px] pt-[100px]">
            <div className="containers bg-white w-[550px] h-[600px] rounded-[40px]">
                <h1 className="text-center pt-[50px] pb-[30px] text-[35px] text-[#0f907e]">Register Here</h1>
                <div className="flex gap-[30px] justify-center mb-[15px]">
                    <img className="rounded-full" src={FaceBook} alt="Facebook Logo" width={45} height={45}/>
                    <img className="rounded-full" src={Twitter} alt="Twitter Logo" width={45} height={45}/>
                    <img className="rounded-full" src={GooglePlus} alt="Google plus Logo" width={45} height={45}/>
                </div>
                <div className="flex flex-col justify-center gap-[40px] pt-[20px]">
                    <div className="relative flex items-center">
                        <img className="absolute ml-[10px]" src={Email} alt="Email adress" width={20} height={25}/>
                        <input required className="w-[500px] h-[50px] bg-gray-200 rounded-[10px] outline-none pl-[45px]" type="text" placeholder="Enter name"/>
                    </div>

                    <div className="relative flex items-center">
                        <img className="absolute ml-[10px]" src={Contact} alt="Contact" width={25} height={30}/>
                        <input required className="w-[500px] h-[50px] bg-gray-200 rounded-[10px] outline-none pl-[45px]" type="text" placeholder="Enter phone number"/>
                    </div>

                    <div className="relative flex items-center">
                        <img className="absolute ml-[10px]" src={Password} alt="Password" width={26} height={25}/>
                        <input required className="w-[500px] h-[50px] bg-gray-200 rounded-[10px] outline-none pl-[45px]" type="text" placeholder="Enter email"/>
                    </div>
                    <button className="bg-[#3AAF9F] w-[200px] h-[45px] mt-[10px] rounded-[15px] text-white mx-auto hover:w-[210px] hover:h-[50px] hover:bg-gray-200 hover:text-[#3AAF9F] duration-300">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Form