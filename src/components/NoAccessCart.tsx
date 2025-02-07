import Link from "next/link";

interface props{
    name:string
}

const NoAccessCart = ({name}:props) => {

  return (
    <div className="flex flex-col items-center justify-center text-center px-6 mb-20">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        Access Denied
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        You need to sign in to view your {name}.
      </p>
      <Link href="/sign-in" className="bg-pink-500 text-white font-medium text-sm px-5 py-2 rounded-[2px] shadow-md hover:bg-pink-600 transition duration-200">
        
          Sign In
      
      </Link>
    </div>
  );
};

export default NoAccessCart;
