import Skills from "../../components/Skills"
import Tools from "../../components/Tools"

export default function Technologies() {
    return (
      <>
        <div className="flex flex-col justify-center items-center min-h-[87vh] bg-[#345ca8] dark:bg-[#023047]">
          <Skills/>
          <Tools/>
        </div>
      </>
    )
  }