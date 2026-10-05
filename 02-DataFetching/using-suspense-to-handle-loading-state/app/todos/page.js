//how to handle loading state using <suspense>
import SlowComponent2s from "@/components/SlowComponent2s";
import SlowComponent3s from "@/components/SlowComponent3s";
import TodosItem from "@/components/TodosItem";
import { Suspense } from "react";

const Todos = async () => {

  return (
    <>
      <h1>Todos</h1>

      <Suspense fallback={<div>Loading todos </div>}>
        <TodosItem />
      </Suspense>

      <Suspense fallback={<div>Loading data 1</div>}>
        <SlowComponent2s />
      </Suspense>

      <Suspense fallback={<div>Loading data 2</div>}>
        <SlowComponent3s />
      </Suspense>

    </>
  );
};

export default Todos;