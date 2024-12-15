// src/models/SleepReport.ts
export interface SleepReport {
    date: string
    deepSleep: number  // 深度睡眠时长，单位：小时
    lightSleep: number  // 浅度睡眠时长，单位：小时
    remSleep: number  // 快速眼动睡眠时长，单位：小时
    awakeTime: number  // 清醒时长，单位：小时
    qualityScore: number  // 睡眠质量评分，0-100
  }
  