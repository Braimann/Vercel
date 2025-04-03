"use client"

import { useState } from "react"
import { AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-amber-400" />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm text-amber-700">
            <strong>Avertissement :</strong> Ce site web est un service d'information indépendant et ne représente aucun
            département ou entité officielle. Les informations fournies sont à titre indicatif uniquement.
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="ml-2 -mr-1 -mt-1 text-amber-500 hover:bg-amber-100"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

