import { useForm } from "react-hook-form"
export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log({ data });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={"text"} defaultValue={"..."} {...register("title")}/>
            <input type={"text"} {...register("content", {
                required: true
            })}/>
            {errors.password && <h3>You need to finish your article, before applying</h3>}
            <input type={"text"} {...register("author", {
                required: true
            })}/>
            <input type={"submit"}/>
        </form>
    )
}