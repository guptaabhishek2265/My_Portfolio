import {useState} from "react";
import {  motion } from "framer-motion";
import { HomeIcon, Menu, Phone, ShoppingBagIcon, User2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../@/components/ui/form"
import { Input } from "../../@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react";
import { Vortex } from "./ui/vortex";
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username is required.",
  }),
  email: z.string().min(1, {
    message: "Email is required.",
  }).email({message: "Email is invalid."}),
  message: z.string().min(2, {
    message: "Message is required.",
  }),
})
 
const ContactMe = () => {
    const navigate=useNavigate();
  const [showDiv,setShowDiv]=useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  })
  return (
    <Vortex>
        <motion.div
          initial={{rotateZ:0}}
          animate={{rotateZ:showDiv ? 90 : 0}}
          transition={{duration:0.1}}
        className='h-10 w-10 bg-fuchsia-900 flex flex-row fixed top-6 left-3 items-center justify-center rounded z-20'>
          <Menu className='bg-[#9e9eed] p-[2px] border-zinc-900 rounded h-8 w-8 cursor-pointer z-10' onClick={()=>{setShowDiv(!showDiv)}}/>
        </motion.div>
      <div className="h-screen w-full z-10 flex felx-col container bg-grey-200 items-center justify-center overflow-y-scroll">
        <Card className="mx-auto max-w-[500px] z-40 border-2 border-zinc-400 rounded-3xl px-16 flex flex-col justify-center h-[30rem] max-h-screen bg-black bg-opacity-50 py-10 overflow-x-hidden overflow-y-hidden">
          <CardHeader>
              <CardTitle>
                  <h2 className="font-semibold text-zinc-300 text-5xl pb-5">Contact Me</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(()=>{})}
                        className="space-y-8"
                    >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300 ">Username</FormLabel>
                                <FormControl>
                                    <Input className="rounded-xl p-2 flex flex-row item-center justify-center h-10 bg-transparent border-zinc-300 border-2 font-mono text-white"
                                        placeholder="John Doe"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300 ">Email</FormLabel>
                                <FormControl>
                                    <Input className="text-white rounded-xl p-2 flex flex-row item-center justify-center h-10 bg-transparent border-zinc-300 border-2 font-mono"
                                        placeholder="john@gmail.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300 ">Message</FormLabel>
                                <FormControl>
                                    <Input className="text-white rounded-xl p-2 flex flex-row item-center justify-center h-10 bg-transparent border-zinc-300 border-2 font-mono"
                                        placeholder="Type your message here"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                            </FormItem>
                        )}
                    />
                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="disabled:cursor-not-allowed bg-slate-300 rounded-xl w-28 z-40"
                        >
                            {form.formState.isSubmitting ? (
                                <>
                                    <Loader2
                                        size={16}
                                        className="mr-2 animate-spin"
                                    />
                                    Please Wait
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            </Card>
          </div>
        <motion.div className='w-10 rounded-b z-10 top-[50px] left-3 fixed flex flex-col bg-fuchsia-900 pt-2 items-center justify-evenly' 
            initial={{ height: 0 }}
            animate={{ height: showDiv ? screen.height*2/6 : 0}}
            transition={{ duration: 0.1}}
            >
            <HomeIcon className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/')}}/>
            <ShoppingBagIcon className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/projects')}}/>
            <User2 className=' cursor-pointer hover:bg-[#D6D6D6] rounded p-1 bg-[#ededf4] h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/about')}}/>
            <Phone className=' cursor-pointer hover:bg-blue-500 rounded p-1 bg-blue-400 h-8 w-8' style={{display:showDiv?'block':'contents'}} onClick={()=>{navigate('/contact')}}/>
        </motion.div>
     </Vortex>
  )
}

export default ContactMe
