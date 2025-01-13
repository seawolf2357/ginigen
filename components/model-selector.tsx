'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'
import Image from 'next/image'
import { Model, models } from '@/lib/types/models'
import { createModelId } from '@/lib/utils'

interface ModelSelectorProps {
  selectedModelId: string
  onModelChange: (id: string) => void
}

export function ModelSelector({
  selectedModelId,
  onModelChange
}: ModelSelectorProps) {
  // 기본 모델만 필터링 (예: OpenAI GPT-4)
  const defaultModel = models.find(model => createModelId(model) === selectedModelId)

  if (!defaultModel) return null

  return (
    <div className="absolute -top-8 left-2">
      <Select
        name="model"
        value={selectedModelId}
        onValueChange={() => {}}  // 변경 불가능하게 설정
      >
        <SelectTrigger className="mr-2 h-7 text-xs border-none shadow-none focus:ring-0">
          <SelectValue>
            <div className="flex items-center space-x-1">
              <Image
                src={`/providers/logos/${defaultModel.providerId}.svg`}
                alt={defaultModel.provider}
                width={18}
                height={18}
                className="bg-white rounded-full border"
              />
              <span className="text-xs font-medium">{defaultModel.name}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={selectedModelId}>
            <div className="flex items-center space-x-1">
              <Image
                src={`/providers/logos/${defaultModel.providerId}.svg`}
                alt={defaultModel.provider}
                width={18}
                height={18}
                className="bg-white rounded-full border"
              />
              <span className="text-xs font-medium">{defaultModel.name}</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
      </Select>
    </div>
  )
}
