/* offsets.js -- offsets for exploitation
 *
 * Copyright (C) 2020 TheFloW, 2922 skgleba
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

SceWebKit_gadgets_v360 = {
  ldm_r0_r0_r1_r4_r8_fp_ip_pc: 0x5490e0,
  ldm_r1_r0_ip_lr_pc: 0x2b11c,
  ldm_r1_r0_r2_r3_r8_fp_ip_pc: 0x62b700,
  ldm_r4_r3_r8_ip_pc: 0xb2bd0,
  ldm_r8_r1_r6_ip_lr_pc: 0x5579e0,
  str_r0_r3_bx_lr: 0x2431cd,
}

SceWebKit_gadgets_v361_v365 = {
  ldm_r0_r0_r1_r4_r8_fp_ip_pc: 0x5490e4,
  ldm_r1_r0_ip_lr_pc: 0x2b120,
  ldm_r1_r0_r2_r3_r8_fp_ip_pc: 0x62b6e0,
  ldm_r4_r3_r8_ip_pc: 0xb2bd4,
  ldm_r8_r1_r6_ip_lr_pc: 0x5579c0,
  str_r0_r3_bx_lr: 0x2431d1,
}

SceWebKit_gadgets_v368_v373 = {
  ldm_r0_r0_r1_r4_r8_fp_ip_pc: 0x549a80,
  ldm_r1_r0_ip_lr_pc: 0x2b19c,
  ldm_r1_r0_r2_r3_r8_fp_ip_pc: 0x62f808,
  ldm_r4_r3_r8_ip_pc: 0xb2d3c,
  ldm_r8_r1_r6_ip_lr_pc: 0x5587b0,
  str_r0_r3_bx_lr: 0x24367d,
}

SceWebKit_offsets_v360 = {
  SceWebKit_base_off: 0xabb65c,
  SceNet_stub_off: 0x85F414,
  SceLibc_stub_off: 0x85F504,
  elementvtable_off: -0x70,
  setscrollleft_off: 0x4e,
}

SceWebKit_offsets_v361_v365 = {
  SceWebKit_base_off: 0xabb63c,
  SceNet_stub_off: 0x85f3f4,
  SceLibc_stub_off: 0x85f4e4,
  elementvtable_off: -0x70,
  setscrollleft_off: 0x4e,
}

SceWebKit_offsets_v368_v373 = {
  SceWebKit_base_off: 0xac3544,
  SceNet_stub_off: 0x866ab8,
  SceLibc_stub_off: 0x866ba8,
  elementvtable_off: -0x70,
  setscrollleft_off: 0x4e,
}

SceLibc_functions_v360_v373 = {
  malloc: 0xfa19,
  free: 0xfa29,
}

SceLibc_gadgets_v360_v373 = {
  setjmp: 0x14071,
  longjmp: 0x14099,
}

SceLibc_offsets_v360_v373 = {
  SceLibc_base_off: 0xfa49,
}

SceNet_functions_v360_v373 = {
  sceNetHtons: 0x23d5,
  sceNetSyscallClose: 0x9f60,
  sceNetSyscallBind: 0x9f80,
  sceNetSyscallIoctl: 0x9f90,
  sceNetSyscallSocket: 0xa030,
  sceNetSyscallGetIfList: 0xa050,
  sceNetSyscallSendmsg: 0xa0b0,
  sceNetSyscallControl: 0xa110,
}

SceNet_offsets_v360_v373 = {
  SceNet_base_off: 0x23ed,
}

SceNetPs_gadgets_v360 = {
  blx_r0_pop_r3_pc: 0x29dc7,
  blx_r3_pop_r3_pc: 0x17f1,
  blx_r4_add_sp_c_pop_r4_r5_pc: 0xdfed,

  pop_pc: 0x15e2f,
  pop_r0_r1_r2_r3_r4_r6_pc: 0x22d5d,
  ldm_r0_r0_r1_r2_r3_r4_ip_sp_lr_pc: 0xDEADBEEF,
  // potential gadget: ldm_r0_r1_r3_r4_ip_sp_lr_pc: 0x10414,
  ldr_r0_r4_pop_r4_pc: 0x2a43d,

  str_r0_r4_pop_r4_pc: 0x165cf,

  push_r3_r4_lr_pop_r0_r1_r2_r6_r0_r1_r3_r4_r5_r6_pc: 0x2ad17,
  add_r2_r4_pop_r4_r5_str_r2_r1_bx_lr: 0x248ab,
  orrs_r0_r3_pop_r3_pc: 0x3ac7,
  movs_r0_0_pop_r3_pc: 0xb7d,

  ksceKernelFreeMemBlock: 0x2a448,
  ksceKernelGetMemBlockBase: 0x2a488,
  ksceKernelMemcpyUserToKernel: 0x2a498,
  ksceKernelAllocMemBlock: 0x2a4b8,

  empty_string: 0x22,
}

SceNetPs_gadgets_v363_v370 = {
  blx_r0_pop_r3_pc: 0x2a11b,
  blx_r3_pop_r3_pc: 0x1959,
  blx_r4_add_sp_c_pop_r4_r5_pc: 0xe361,

  pop_pc: 0x1619f,
  pop_r0_r1_r2_r3_r4_r6_pc: 0x230cd,
  ldm_r0_r0_r1_r2_r3_r4_ip_sp_lr_pc: 0xb734,
  ldr_r0_r4_pop_r4_pc: 0x2a79d,

  str_r0_r4_pop_r4_pc: 0x1693f,

  push_r3_r4_lr_pop_r0_r1_r2_r6_r0_r1_r3_r4_r5_r6_pc: 0x2b067,
  add_r2_r4_pop_r4_r5_str_r2_r1_bx_lr: 0x24c1b,
  orrs_r0_r3_pop_r3_pc: 0x3c2f,
  movs_r0_0_pop_r3_pc: 0xce5,

  ksceKernelFreeMemBlock: 0x2a7a8,
  ksceKernelGetMemBlockBase: 0x2a7e8,
  ksceKernelMemcpyUserToKernel: 0x2a7f8,
  ksceKernelAllocMemBlock: 0x2a818,

  empty_string: 0x22,
}

SceNetPs_gadgets_v371_v373 = {
  blx_r0_pop_r3_pc: 0x2a14b,
  blx_r3_pop_r3_pc: 0x1959,
  blx_r4_add_sp_c_pop_r4_r5_pc: 0xe391,

  pop_pc: 0x161cf,
  pop_r0_r1_r2_r3_r4_r6_pc: 0x230fd,
  ldm_r0_r0_r1_r2_r3_r4_ip_sp_lr_pc: 0xb764,
  ldr_r0_r4_pop_r4_pc: 0x2a7cd,

  str_r0_r4_pop_r4_pc: 0x1696f,

  push_r3_r4_lr_pop_r0_r1_r2_r6_r0_r1_r3_r4_r5_r6_pc: 0x2b097,
  add_r2_r4_pop_r4_r5_str_r2_r1_bx_lr: 0x24c4b,
  orrs_r0_r3_pop_r3_pc: 0x3c2f,
  movs_r0_0_pop_r3_pc: 0xce5,

  ksceKernelFreeMemBlock: 0x2a7d8,
  ksceKernelGetMemBlockBase: 0x2a818,
  ksceKernelMemcpyUserToKernel: 0x2a828,
  ksceKernelAllocMemBlock: 0x2a848,

  empty_string: 0x22,
}

SceNetPs_offsets_v360 = {
  SceNetPs_base_off: -0x89d1,
}

SceNetPs_offsets_v363_v370 = {
  SceNetPs_base_off: -0x8d45,
}

SceNetPs_offsets_v371_v373 = {
  SceNetPs_base_off: -0x8d75,
}

SceSysmem_offsets_v360 = {
  SceSysmem_base_off: -0xa8ee,
  ksceKernelRemapBlock: 0xa74d,
  ksceKernelCpuDcacheWritebackRange: 0x22fcd,
}

SceSysmem_offsets_v363_v373 = {
  SceSysmem_base_off: -0x810b,
  ksceKernelRemapBlock: 0x7f69,
  ksceKernelCpuDcacheWritebackRange: 0x22fcd,
}

version_deps = {
  "3.60": {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v360,
      offsets: SceWebKit_offsets_v360,
    },
    "SceLibc": {
      functions: SceLibc_functions_v360_v373,
      gadgets: SceLibc_gadgets_v360_v373,
      offsets: SceLibc_offsets_v360_v373,
    },
    "SceNet": {
      functions: SceNet_functions_v360_v373,
      offsets: SceNet_offsets_v360_v373,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v360,
      offsets: SceNetPs_offsets_v360,
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v360,
    },
  },
  // TODO: 3.61
  "3.63": {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v361_v365,
      offsets: SceWebKit_offsets_v361_v365,
    },
    "SceLibc": {
      functions: SceLibc_functions_v360_v373,
      gadgets: SceLibc_gadgets_v360_v373,
      offsets: SceLibc_offsets_v360_v373,
    },
    "SceNet": {
      functions: SceNet_functions_v360_v373,
      offsets: SceNet_offsets_v360_v373,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v373,
    },
  },
  "3.65": {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v361_v365,
      offsets: SceWebKit_offsets_v361_v365,
    },
    "SceLibc": {
      functions: SceLibc_functions_v360_v373,
      gadgets: SceLibc_gadgets_v360_v373,
      offsets: SceLibc_offsets_v360_v373,
    },
    "SceNet": {
      functions: SceNet_functions_v360_v373,
      offsets: SceNet_offsets_v360_v373,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v373,
    },
  },
  // TODO: 3.67
  "3.68": {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v373,
      offsets: SceWebKit_offsets_v368_v373,
    },
    "SceLibc": {
      functions: SceLibc_functions_v360_v373,
      gadgets: SceLibc_gadgets_v360_v373,
      offsets: SceLibc_offsets_v360_v373,
    },
    "SceNet": {
      functions: SceNet_functions_v360_v373,
      offsets: SceNet_offsets_v360_v373,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v373,
    },
  },
  "3.69": {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v373,
      offsets: SceWebKit_offsets_v368_v373,
    },
    "SceLibc": {
      functions: SceLibc_functions_v360_v373,
      gadgets: SceLibc_gadgets_v360_v373,
      offsets: SceLibc_offsets_v360_v373,
    },
    "SceNet": {
      functions: SceNet_functions_v360_v373,
      offsets: SceNet_offsets_v360_v373,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v373,
    },
  },
  "3.70": {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v373,
      offsets: SceWebKit_offsets_v368_v373,
    },
    "SceLibc": {
      functions: SceLibc_functions_v360_v373,
      gadgets: SceLibc_gadgets_v360_v373,
      offsets: SceLibc_offsets_v360_v373,
    },
    "SceNet": {
      functions: SceNet_functions_v360_v373,
      offsets: SceNet_offsets_v360_v373,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v373,
    },
  },
  "3.71": {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v373,
      offsets: SceWebKit_offsets_v368_v373,
    },
    "SceLibc": {
      functions: SceLibc_functions_v360_v373,
      gadgets: SceLibc_gadgets_v360_v373,
      offsets: SceLibc_offsets_v360_v373,
    },
    "SceNet": {
      functions: SceNet_functions_v360_v373,
      offsets: SceNet_offsets_v360_v373,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v371_v373,
      offsets: SceNetPs_offsets_v371_v373,
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v373,
    },
  },
  "3.72": {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v373,
      offsets: SceWebKit_offsets_v368_v373,
    },
    "SceLibc": {
      functions: SceLibc_functions_v360_v373,
      gadgets: SceLibc_gadgets_v360_v373,
      offsets: SceLibc_offsets_v360_v373,
    },
    "SceNet": {
      functions: SceNet_functions_v360_v373,
      offsets: SceNet_offsets_v360_v373,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v371_v373,
      offsets: SceNetPs_offsets_v371_v373,
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v373,
    },
  },
  "3.73": {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v373,
      offsets: SceWebKit_offsets_v368_v373,
    },
    "SceLibc": {
      functions: SceLibc_functions_v360_v373,
      gadgets: SceLibc_gadgets_v360_v373,
      offsets: SceLibc_offsets_v360_v373,
    },
    "SceNet": {
      functions: SceNet_functions_v360_v373,
      offsets: SceNet_offsets_v360_v373,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v371_v373,
      offsets: SceNetPs_offsets_v371_v373,
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v373,
    },
  },
  "3.74": {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v373,
      offsets: SceWebKit_offsets_v368_v373,
    },
    "SceLibc": {
      functions: SceLibc_functions_v360_v373,
      gadgets: SceLibc_gadgets_v360_v373,
      offsets: SceLibc_offsets_v360_v373,
    },
    "SceNet": {
      functions: SceNet_functions_v360_v373,
      offsets: SceNet_offsets_v360_v373,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v371_v373,
      offsets: SceNetPs_offsets_v371_v373,
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v373,
    },
  },
};
