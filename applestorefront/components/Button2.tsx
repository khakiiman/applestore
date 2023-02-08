interface Props {
    title: string;
    onClick?: () => void;
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
  }
  
  function Button2({ title, onClick, width, loading, padding, noIcon }: Props) {
    return (
         <a type="button" href="#" className="relative inline-flex items-center justify-center inline-block p-4 px-10 py-4 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">{title}</span>
        </a>
    );
  }
  
  export default Button2;

 