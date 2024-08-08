import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-gray-200 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-md cursor-pointer rounded-xl border border-[#4cbb2a]"
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(125, 224, 94, 0.7)",
      }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-800">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-800">{value}</p>
      </div>
    </motion.div>
  );
};
export default StatCard;
