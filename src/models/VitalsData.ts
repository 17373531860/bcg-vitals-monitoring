// src/models/VitalsData.ts
export interface VitalsData {
    heartRate: number  // 心率
    respiratoryRate: number  // 呼吸频率
    bodyMovement: boolean  // 是否有体动
    bedStatus: 'in' | 'out'  // 是否在床
  }
  