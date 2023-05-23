import {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: email,
                name: name,
                message: message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const {error} = await res.json();
        if (error) {
            console.log(error);
            return;
        } else {
            setSubmitted(true);
        }
    };

    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const error = () => {
        toast.error("Error. Try again!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

    return (
        <>
            <div className="h-[70vh] flex justify-center flex-col items-center">
                <h1 className={"text-center text-5xl py-7"}>Contact Form</h1>
                <div className={"flex justify-center"}>
                    <form
                        onSubmit={handleSubmit}
                        className={
                            "flex flex-col p-10 border border-black rounded-lg justify-center items-center space-y-5 mb-12 min-w-[50%]"
                        }
                    >
                        <div>
                            <label htmlFor="name">Name</label>
                            <br/>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                name="name"
                                className={
                                    "border border-black rounded-lg min-w-[400px] min-h-[45px] px-3"
                                }
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <br/>
                            <input
                                type="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                name="email"
                                className={
                                    "border border-black rounded-lg min-w-[400px] min-h-[45px] px-3"
                                }
                            />
                        </div>

                        <div>
                            <label htmlFor="message">Message</label>
                            <br/>
                            <textarea
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                                name="message"
                                className={
                                    "border border-black rounded-lg min-w-[400px] min-h-[45px] px-3"
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className={
                                "border border-black rounded-lg px-5 py-3 hover:bg-black hover:text-white transition-all"
                            }
                            onClick={(e) => {
                                handleSubmit(e);

                                if(submitted) {
                                    notify();
                                }else {
                                    error();
                                }
                            }}
                        >Submit</button>
                    </form>



                </div>
            </div>
        </>
    );
}
