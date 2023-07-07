import React from "react";
import FormChildDiv from "../components/FormChildDiv";
import QuestionTitleSpan from "../components/questionTitleSpan";
import QuestionLabel from "../components/QuestionLabel";
import { SubmitHandler, useForm } from "react-hook-form";
import QuestionInput from "../components/QuestionInput";
import NotSelectedErrorMsg from "../components/NotSelectedErrorMsg";

interface FormDataProp {
  absence: string;
  description1: string;
  description2: string;
  question1: string;
  question2: string;
  "github-id": string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProp>({ mode: "onChange" });
  const onValid: SubmitHandler<FormDataProp> = (data) => {
    console.log(data);
  };
  const onInValid = () => {};
  return (
    <div className="main-container w-screen p-20 flex items-center justify-center">
      <div className="form-container p-8 w-[70%] rounded-xl border-2 flex flex-col items-center border-black">
        <span className="form-title h-20 pt-4 pb-20 block text-2xl font-bold">
          노마드 리액트 스터디 2기 폼
        </span>
        <form onSubmit={handleSubmit(onValid, onInValid)} className="w-full">
          <FormChildDiv subject="question1 pb-10">
            <QuestionTitleSpan>
              노마드 스터디를 하면서 가장 좋았던 점을 알려주세요.
            </QuestionTitleSpan>
            {/* <span className="text-red-600 font-semibold text-xs">
              {errors.question1?.message}
            </span> */}
            <NotSelectedErrorMsg errors={errors} name="question1" />
            <QuestionLabel>
              <QuestionInput
                register={register}
                name="question1"
                value="혼자 공부하는 느낌이 안들어서 좋았어요."
              />
              <span className="text-[14px]">
                혼자 공부하는 느낌이 안들어서 좋았어요.
              </span>
            </QuestionLabel>
            <QuestionLabel>
              <QuestionInput
                register={register}
                name="question1"
                value="새로운 사람들을 사귀게 되어서 좋았어요!"
              />
              <span className="text-[14px]">
                새로운 사람들을 사귀게 되어서 좋았어요!
              </span>
            </QuestionLabel>
            <QuestionLabel>
              <QuestionInput
                register={register}
                name="question1"
                value="열정적인 TA분들이 계셔서 막힐 때마다 질문할 수 있어서 너무 좋아요 :)"
              />
              <span className="text-[14px]">
                열정적인 TA분들이 계셔서 막힐 때마다 질문할 수 있는 점이 너무
                좋아요 :)
              </span>
            </QuestionLabel>
          </FormChildDiv>
          <FormChildDiv subject="question2 pb-10">
            <QuestionTitleSpan>
              노마드 스터디를 하면서 힘들었던 때가 있었다면 언제인가요?
            </QuestionTitleSpan>
            <NotSelectedErrorMsg errors={errors} name="question2" />
            <QuestionLabel>
              <QuestionInput
                register={register}
                name="question2"
                value="직장인이라 야근하고 밤새서 과제 할 때 ㅠㅠ"
              />
              <span className="text-[14px]">
                직장인이라 야근하고 밤새서 과제 할 때 ㅠㅠ
              </span>
            </QuestionLabel>
            <QuestionLabel>
              <QuestionInput
                register={register}
                name="question2"
                value="과제가 너무 어려울 때!"
              />
              <span className="text-[14px]">과제가 너무 어려울 때!</span>
            </QuestionLabel>
            <QuestionLabel>
              <QuestionInput
                register={register}
                name="question2"
                value="졸작 제출을 깜빡해서 환급이 날아갔을때.."
              />
              <span className="text-[14px]">
                졸작 제출을 깜빡해서 환급이 날아갔을때..
              </span>
            </QuestionLabel>
          </FormChildDiv>
          <FormChildDiv subject="absence pb-10">
            <label htmlFor="absence" className="text-lg font-semibold">
              나의 결석 횟수는?
            </label>
            <NotSelectedErrorMsg errors={errors} name="absence" />
            <select
              {...register("absence", {
                required: "결석 횟수를 선택하세요!",
              })}
              className="border-2 border-black rounded-md focus:outline-none focus:border-yellow-600 pl-1"
              id="absence"
            >
              <option value="">선택하기</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="8">8회 이상 - 탈락했어요..</option>
            </select>
          </FormChildDiv>
          <FormChildDiv subject="description1 pb-6">
            <span className="text-lg font-semibold">
              노마드 스터디를 마친 소감을 알려주세요~
            </span>
            <NotSelectedErrorMsg errors={errors} name="description1" />
            <input
              {...register("description1", {
                required: "소감을 작성해주세요.",
              })}
              className="border-2 border-black rounded-md focus:outline-none focus:border-yellow-600 pl-1"
            ></input>
          </FormChildDiv>
          <FormChildDiv subject="description2 pb-6">
            <span className="text-lg font-semibold">앞으로 나의 계획은?</span>
            <NotSelectedErrorMsg errors={errors} name="description2" />
            <textarea
              {...register("description2", {
                required: "서로 계획을 같이 공유해요!",
                minLength: {
                  value: 10,
                  message: "10글자 이상 작성해주세요!",
                },
              })}
              className="border-2 border-black rounded-md focus:outline-none focus:border-yellow-600 pl-1"
            ></textarea>
          </FormChildDiv>
          <FormChildDiv subject="github-id pb-10">
            <span className="text-lg font-semibold">
              깃허브 주소, 깃친해요!
            </span>
            <NotSelectedErrorMsg errors={errors} name="github-id" />
            <input
              {...register("github-id", {
                required: "우리 깃허브 친구 해요 ㅠ_ㅠ",
                validate: (url) =>
                  url.includes(`github.com/`) ||
                  "github.com/[id] 형식으로 작성해주세요!",
              })}
              className="border-2 border-black rounded-md focus:outline-none focus:border-yellow-600 pl-1"
            ></input>
          </FormChildDiv>
          <div className="button-container flex w-full justify-center">
            <button
              type="submit"
              className="p-4 text-gray-600 text-sm hover:bg-yellow-300 font-semibold border-[1px] border-yellow-500 rounded-lg bg-yellow-200"
            >
              노마드 코더 고마워요!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
