import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { ArrowLeftIcon, PlusIcon, XIcon } from '@heroicons/react/solid';
import { PhotographIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import isURL from 'validator/lib/isURL';
import Button from '../../components/button';
import { useAuth } from '../../context/auth';
import UserGuard from '../../guards/user-guard';
import { User } from '../../types/user';
import InputField from '../../components/input-field';
import TextareaField from '../../components/textarea-field';
import Modal from '../../components/modal';
import Crop from '../../components/crop-modal';
import CropModal from '../../components/crop-modal';

const Edit = () => {
  const [isCropperOpen, setIsCropperOpen] = useState<boolean>(false);
  const user = useAuth();
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<User>();

  const { fields, append, remove, insert } = useFieldArray<User>({
    control,
    name: 'links',
  });

  useEffect(() => {
    if (user) {
      // 初期値のセット
      reset(user);
    }
  }, [user?.id]);

  // 保存
  const updateUser = (data: User) => {
    console.log(data);
  };

  const [image, setImage] = useState<string>();
  const [targetImage, setTargetImage] = useState<string>();

  // トリミング
  const onCrop = (croppedImage: string) => {
    setImage(croppedImage);
  };

  const removeImage = () => {
    setImage(undefined);
  };

  return (
    <UserGuard>
      <div className="container">
        <Link href="/mypage">
          <a className="w-6 h-6 inline-block my-4">
            <ArrowLeftIcon />
          </a>
        </Link>

        <form
          onSubmit={handleSubmit(updateUser)}
          className="space-y-4 mx-auto max-w-md"
        >
          <label className="inline-block relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <input
              type="file"
              className="hidden"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                const target = e.currentTarget;
                const file = target.files?.[0];

                const reader = new FileReader();

                reader.onload = () => {
                  setTargetImage(reader.result as string);
                  target.value = '';
                };

                reader.readAsDataURL(file as Blob);
              }}
            />
            {image ? (
              <img src={image} alt="" className="w-40" />
            ) : (
              <div className="bg-gray-300 w-40 aspect-w-5 aspect-h-8"></div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
              <PhotographIcon className="w-10 text-white opacity-20" />
            </div>
            {image && (
              <button
                className="absolute top-0 right-0 w-10 h-10 p-3 text-white"
                onClick={(e) => {
                  removeImage();
                  e.preventDefault();
                }}
                type="button"
              >
                <XIcon />
              </button>
            )}
          </label>

          <CropModal
            src={targetImage!}
            size={{
              width: 500,
              height: 800,
            }}
            aspect={5 / 8}
            onCrop={onCrop}
            onClose={() => setTargetImage(undefined)}
          />

          <InputField
            type="text"
            label="名前"
            required
            autoComplete="name"
            currentlength={watch('name')?.length}
            maxLength={20}
            error={errors.name?.message}
            register={register('name', {
              required: '必須入力です',
              maxLength: {
                value: 20,
                message: '最大20文字です',
              },
            })}
          />

          <InputField
            type="text"
            label="肩書き"
            autoComplete="organization-title"
            currentlength={watch('title')?.length}
            maxLength={20}
            error={errors.title?.message}
            required
            register={register('title', {
              required: '必須入力です',
              maxLength: {
                value: 20,
                message: '最大20文字です',
              },
            })}
          />

          <TextareaField
            label="自己紹介"
            currentlength={watch('description')?.length}
            maxLength={80}
            error={errors.description?.message}
            required
            minRows={4}
            register={register('description', {
              required: '必須入力です',
              maxLength: {
                value: 80,
                message: '最大80文字です',
              },
            })}
          />

          {fields.map((field, i) => (
            <InputField
              key={field.id}
              type="text"
              label="リンク"
              autoComplete="off"
              action={
                <>
                  <button type="button" onClick={() => remove(i)}>
                    <MinusCircleIcon className="w-6 h-6 text-gray-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      insert(i + 1, {
                        url: '',
                      })
                    }
                  >
                    <PlusCircleIcon className="w-6 h-6 text-gray-400" />
                  </button>
                </>
              }
              required
              error={errors.links?.[i]?.url?.message}
              register={register(`links.${i}.url`, {
                validate: (value) => isURL(value) || 'URL形式ではありません',
                required: true,
              })}
            />
          ))}

          {!fields?.length && (
            <button
              className="w-full flex justify-center text-gray-500 border rounded items-center py-2"
              type="button"
              onClick={() =>
                append({
                  url: '',
                })
              }
            >
              <PlusIcon className="w-4 h-4" />
              <span>リンクを追加</span>
            </button>
          )}

          <Button>保存</Button>
        </form>
      </div>
    </UserGuard>
  );
};

export default Edit;
