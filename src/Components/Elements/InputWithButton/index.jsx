import { Input } from "@/Components/ui/input";

const InputWithButton = ({ searchQuery, setSearchQuery }) => {
    return (
      <div className="flex lg:w-full w-56 max-w-sm items-center space-x-2 mb-2">
        <Input
          type="text"
          placeholder="Search dog in here ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    );
};

export default InputWithButton;
