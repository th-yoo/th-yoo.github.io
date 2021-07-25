import{o,c as e,b as r}from"./app.b2aa9d0b.js";const n='{"title":"Ubuntu상에서의 MSYS2","description":"","frontmatter":{"lang":"ko-KR","title":"Ubuntu상에서의 MSYS2","navbar":true,"sidebar":"auto"},"headers":[{"level":2,"title":"Wine 설치","slug":"wine-설치"},{"level":2,"title":"MSYS2를 Wine에 바로 설치","slug":"msys2를-wine에-바로-설치"},{"level":2,"title":"가능한 해결 방법","slug":"가능한-해결-방법"},{"level":3,"title":"MSYS2 Chroot Jail","slug":"msys2-chroot-jail"}],"relativePath":"ko/win_bridge_server/msys2.md","lastUpdated":1623665787681}',t={},i=r('<h1 id="ubuntu상에서의-msys2"><a class="header-anchor" href="#ubuntu상에서의-msys2" aria-hidden="true">#</a> Ubuntu상에서의 MSYS2</h1><h2 id="wine-설치"><a class="header-anchor" href="#wine-설치" aria-hidden="true">#</a> <a href="./wine.html">Wine 설치</a></h2><h2 id="msys2를-wine에-바로-설치"><a class="header-anchor" href="#msys2를-wine에-바로-설치" aria-hidden="true">#</a> <a href="https://www.msys2.org/" target="_blank" rel="noopener noreferrer">MSYS2</a>를 Wine에 바로 설치</h2><ul><li><a href="https://github.com/msys2/MSYS2-packages/issues/682" target="_blank" rel="noopener noreferrer">동작 불가</a></li><li><code>$ wget https://repo.msys2.org/distrib/x86_64/msys2-x86_64-20210604.exe</code> (98 MB)</li><li><code>$ wine64 msys2-x86_64-20210604.exe</code></li></ul><div class="language-"><pre><code>yoo@yoo-ubuntu:~/download$ wine64 msys2-x86_64-20210604.exe \n0024:err:winediag:SECUR32_initNTLMSP ntlm_auth was not found or is outdated. Make sure that ntlm_auth &gt;= 3.0.25 is in your path. Usually, you can find it in the winbind package of your distribution.\n0024:fixme:console:GetConsoleProcessList (000000000031FC90,2): stub\n0024:fixme:win:RegisterPowerSettingNotification (0000000000020058,{02731015-4510-4526-99e6-e5a17ebd1aea},0): stub\n0024:fixme:nls:get_dummy_preferred_ui_language (0x8 000000000031F7C8 000000000031F7F0 000000000031F7CC) returning a dummy value (current locale)\n0024:fixme:nls:get_dummy_preferred_ui_language (0x8 000000000031F7C8 000000000031F7F0 000000000031F7CC) returning a dummy value (current locale)\nlibGL error: No matching fbConfigs or visuals found\nlibGL error: failed to load driver: swrast\nX Error of failed request:  GLXBadContext\n  Major opcode of failed request:  148 (GLX)\n  Minor opcode of failed request:  6 (X_GLXIsDirect)\n  Serial number of failed request:  346\n  Current serial number in output stream:  345\nyoo@yoo-ubuntu:~/download$ 0094:err:rpc:I_RpcReceive we got fault packet with status 0x1c010003\n</code></pre></div><ul><li><p><a href="https://askubuntu.com/questions/1090094/wine-missing-ntlm-auth-3-0-25" target="_blank" rel="noopener noreferrer">Wine missing ntlm_auth</a></p></li><li><p><code>$ sudo apt-get install winbind</code> (54.5 MB)</p></li><li><p><a href="https://github.com/openai/gym/issues/509" target="_blank" rel="noopener noreferrer">libGL error: failed to load driver: swrast</a></p></li><li><p><code>$ sudo apt-get install mesa-utils</code> (150 kB)</p></li><li><p><code>$ sudo apt-get install libgl1-mesa-glx</code> (69.6 kB)</p></li><li><p><a href="https://forums.fedoraforum.org/showthread.php?321633-Fedora-29-libGL-error" target="_blank" rel="noopener noreferrer">FIX Cygwin X for OpenGL</a></p><ul><li><code>C:\\cygwin64\\bin\\run.exe --quote /usr/bin/bash.exe -l -c &quot;cd; exec /usr/bin/startxwin -- +iglx -nowgl&quot;</code></li><li><code>$ glxglears</code></li></ul></li></ul><div class="language-"><pre><code>yoo@yoo-ubuntu:~/download$ wine64 msys2-x86_64-20210604.exe \n0024:fixme:console:GetConsoleProcessList (000000000031FC90,2): stub\n0024:fixme:win:RegisterPowerSettingNotification (0000000000030040,{02731015-4510-4526-99e6-e5a17ebd1aea},0): stub\n0024:fixme:nls:get_dummy_preferred_ui_language (0x8 000000000031F7C8 000000000031F7F0 000000000031F7CC) returning a dummy value (current locale)\n0024:fixme:nls:get_dummy_preferred_ui_language (0x8 000000000031F7C8 000000000031F7F0 000000000031F7CC) returning a dummy value (current locale)\n0024:fixme:d3d:wined3d_guess_card No card selector available for card vendor 0000 (using GL_RENDERER &quot;llvmpipe (LLVM 11.0.0, 256 bits)&quot;).\n0024:fixme:ntdll:NtQuerySystemInformation info_class SYSTEM_PERFORMANCE_INFORMATION\n0024:fixme:uxtheme:SetWindowThemeAttribute (0000000000020068,1,000000000031F5B8,8): stub\nXlib:  extension &quot;MIT-SHM&quot; missing on display &quot;localhost:10.0&quot;.\n0024:fixme:explorerframe:taskbar_list_SetProgressValue iface 000000000004B7C0, hwnd 0000000000020068, ullCompleted 64, ullTotal 64 stub!\n0024:fixme:explorerframe:taskbar_list_SetProgressState iface 000000000004B7C0, hwnd 0000000000020068, flags 0 stub!\n0024:fixme:explorerframe:taskbar_list_SetOverlayIcon iface 000000000004B7C0, hwnd 0000000000020068, hIcon 0000000000000000, pszDescription (null) stub!\n0024:fixme:nls:get_dummy_preferred_ui_language (0x8 000000000031B0C8 000000000031B0F0 000000000031B0CC) returning a dummy value (current locale)\n0024:fixme:nls:get_dummy_preferred_ui_language (0x8 000000000031B0C8 000000000031B0F0 000000000031B0CC) returning a dummy value (current locale)\n0024:fixme:explorerframe:taskbar_list_SetOverlayIcon iface 000000000004CFA0, hwnd 0000000000020068, hIcon 0000000000000000, pszDescription (null) stub!\n0118:err:ole:com_get_class_object apartment not initialised\n0118:err:ole:com_get_class_object apartment not initialised\n0118:err:ole:com_get_class_object apartment not initialised\n0118:err:ole:com_get_class_object apartment not initialised\n016c:fixme:ntdll:NtSetInformationToken unimplemented class 4\n016c:fixme:process:NtQueryInformationProcess (process=0xffffffffffffffff) Unimplemented information class: ProcessSessionInformation\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n016c:fixme:advapi:LsaOpenPolicy ((null),000000018031B520,0x00000001,00000000FFFFC2A8) stub\n016c:fixme:security:GetWindowsAccountDomainSid (00000000FFFFC290 000000000001DA38 00000000FFFFC28C): semi-stub\n016c:fixme:advapi:LsaClose (000000000000CAFE) stub\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n016c:fixme:netapi32:DsEnumerateDomainTrustsW ((null), 0x0023, 0xffffc348, 0xffffc334): stub\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0178:fixme:wldap32:ldap_set_optionA Unsupported option: 0x95\n0178:fixme:wldap32:ldap_set_optionA Unsupported option: 0x96\n016c:fixme:netapi32:NetUserGetInfo Only implemented for local computer, but remote serverL&quot;\\\\\\\\@&quot; was requested.\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n016c:fixme:advapi:LsaOpenPolicy ((null),000000018031B520,0x00000800,00000000FFFFC9E8) stub\n016c:fixme:advapi:LsaClose (000000000000CAFE) stub\n016c:fixme:netapi32:NetLocalGroupGetInfo ((null) L&quot;Administrators&quot; 1 0xffffc3d0) semi-stub!\n016c:fixme:netapi32:NetLocalGroupGetInfo ((null) L&quot;Users&quot; 1 0xffffc3d0) semi-stub!\n016c:fixme:file:GetLongPathNameW UNC pathname L&quot;\\\\\\\\?\\\\C:\\\\msys64\\\\usr\\\\bin\\\\cygwin-console-helper.exe&quot;\n0024:fixme:shell:SHGetStockIconInfo (78, 0x101, 0x31b360) semi-stub\n0024:fixme:shell:SHGetStockIconInfo flags 0x101 not implemented\n0024:fixme:shell:SHGetStockIconInfo (78, 0x100, 0x31b360) semi-stub\n0024:fixme:shell:SHGetStockIconInfo flags 0x100 not implemented\n0024:fixme:shell:SHGetStockIconInfo (78, 0x101, 0x31b240) semi-stub\n0024:fixme:shell:SHGetStockIconInfo flags 0x101 not implemented\nXlib:  extension &quot;MIT-SHM&quot; missing on display &quot;localhost:10.0&quot;.\n01bc:fixme:wscript:set_host_properties ignored L&quot;nologo&quot; switch\n01b4:fixme:wscript:set_host_properties ignored L&quot;nologo&quot; switch\n01b4:fixme:vbscript:do_icall L&quot;S&quot; not found\n01b4:fixme:wscript:ActiveScriptSite_OnScriptError ()\n01bc:fixme:vbscript:do_icall L&quot;S&quot; not found\n01bc:fixme:wscript:ActiveScriptSite_OnScriptError ()\n0024:fixme:win:UnregisterPowerSettingNotification (00000000DEADBEEF): stub\nyoo@yoo-ubuntu:~/download$ 015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\16x16\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\32x32\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\48x48\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\64x64\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\96x96\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n015c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n015c:err:menubuilder:InvokeShellLinker failed to extract icon from L&quot;C:\\\\msys64/msys2.exe&quot;\n012c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n012c:err:menubuilder:InvokeShellLinker failed to extract icon from L&quot;C:\\\\msys64/mingw32.exe&quot;\n0154:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n0154:err:menubuilder:InvokeShellLinker failed to extract icon from L&quot;C:\\\\msys64/ucrt64.exe&quot;\n0164:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\039C_msys64\\\\msys2.0.png&quot;\n0164:err:menubuilder:InvokeShellLinker failed to extract icon from L&quot;C:\\\\msys64/msys2.exe&quot;\n0134:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\9D72_msys64\\\\mingw32.0.png&quot;\n0134:err:menubuilder:InvokeShellLinker failed to extract icon from L&quot;C:\\\\msys64/mingw32.exe&quot;\n013c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n013c:err:menubuilder:InvokeShellLinker failed to extract icon from L&quot;C:\\\\msys64/mingw64.exe&quot;\n014c:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\7A6F_msys64\\\\ucrt64.0.png&quot;\n014c:err:menubuilder:InvokeShellLinker failed to extract icon from L&quot;C:\\\\msys64/ucrt64.exe&quot;\n0144:err:menubuilder:convert_to_native_icon error 0x80070003 creating output file L&quot;Z:\\\\home\\\\yoo\\\\.local\\\\share\\\\icons\\\\hicolor\\\\256x256\\\\apps\\\\C8FA_msys64\\\\mingw64.0.png&quot;\n0144:err:menubuilder:InvokeShellLinker failed to extract icon from L&quot;C:\\\\msys64/mingw64.exe&quot;\n\nyoo@yoo-ubuntu:~/download$ \n</code></pre></div><ul><li><p><code>$ cd ~/.wine/drive_c/msys64</code></p></li><li><p><code>$ wine64 start msys2_shell.cmd -mingw64</code></p></li><li><p><code>$ wine64 usr/bin/bash.exe</code></p></li></ul><div class="language-"><pre><code>02c8:fixme:ntdll:NtSetInformationToken unimplemented class 4\nCygwin WARNING:\n  Couldn&#39;t compute FAST_CWD pointer.  This typically occurs if you&#39;re using\n  an older Cygwin version on a newer Windows.  Please update to the latest\n  available Cygwin version from https://cygwin.com/.  If the problem persists,\n  please see https://cygwin.com/problems.html\n\n02c8:fixme:advapi:LsaOpenPolicy ((null),000000018031B520,0x00000001,00000000FFFFC1B8) stub\n02c8:fixme:security:GetWindowsAccountDomainSid (00000000FFFFC1A0 000000000001DFF8 00000000FFFFC19C): semi-stub\n02c8:fixme:advapi:LsaClose (000000000000CAFE) stub\n02c8:fixme:netapi32:DsEnumerateDomainTrustsW ((null), 0x0023, 0xffffc258, 0xffffc244): stub\n02d8:fixme:wldap32:ldap_set_optionA Unsupported option: 0x95\n02d8:fixme:wldap32:ldap_set_optionA Unsupported option: 0x96\n02c8:fixme:netapi32:NetUserGetInfo Only implemented for local computer, but remote serverL&quot;\\\\\\\\@&quot; was requested.\n02c8:fixme:advapi:LsaOpenPolicy ((null),000000018031B520,0x00000800,00000000FFFFC9E8) stub\n02c8:fixme:advapi:LsaClose (000000000000CAFE) stub\n02c8:fixme:netapi32:NetLocalGroupGetInfo ((null) L&quot;Administrators&quot; 1 0xffffc3d0) semi-stub!\n02c8:fixme:netapi32:NetLocalGroupGetInfo ((null) L&quot;Users&quot; 1 0xffffc3d0) semi-stub!\n02d0:fixme:console:console_input_ioctl unsupported ioctl 504088\n</code></pre></div><ul><li><code>$ wine64 usr/bin/pacman.exe</code></li></ul><div class="language-"><pre><code>02e0:fixme:ntdll:NtSetInformationToken unimplemented class 4\nCygwin WARNING:\n  Couldn&#39;t compute FAST_CWD pointer.  This typically occurs if you&#39;re using\n  an older Cygwin version on a newer Windows.  Please update to the latest\n  available Cygwin version from https://cygwin.com/.  If the problem persists,\n  please see https://cygwin.com/problems.html\n\n02e0:fixme:advapi:LsaOpenPolicy ((null),000000018031B520,0x00000001,00000000FFFFC1B8) stub\n02e0:fixme:security:GetWindowsAccountDomainSid (00000000FFFFC1A0 0000000000015088 00000000FFFFC19C): semi-stub\n02e0:fixme:advapi:LsaClose (000000000000CAFE) stub\n02e0:fixme:netapi32:DsEnumerateDomainTrustsW ((null), 0x0023, 0xffffc258, 0xffffc244): stub\n02f0:fixme:wldap32:ldap_set_optionA Unsupported option: 0x95\n02f0:fixme:wldap32:ldap_set_optionA Unsupported option: 0x96\n02e0:fixme:netapi32:NetUserGetInfo Only implemented for local computer, but remote serverL&quot;\\\\\\\\@&quot; was requested.\n02e0:fixme:advapi:LsaOpenPolicy ((null),000000018031B520,0x00000800,00000000FFFFC9E8) stub\n02e0:fixme:advapi:LsaClose (000000000000CAFE) stub\n02e0:fixme:netapi32:NetLocalGroupGetInfo ((null) L&quot;Administrators&quot; 1 0xffffc3d0) semi-stub!\n02e0:fixme:netapi32:NetLocalGroupGetInfo ((null) L&quot;Users&quot; 1 0xffffc3d0) semi-stub!\n02e8:fixme:console:console_input_ioctl unsupported ioctl 504088\n</code></pre></div><h2 id="가능한-해결-방법"><a class="header-anchor" href="#가능한-해결-방법" aria-hidden="true">#</a> 가능한 해결 방법</h2><ul><li>MSYS2를 Chroot Jail에 가둔다 <ul><li>docker는 리소스를 많이 차지</li><li>docker와 달리 kernel뿐만 아니라 호스트의 시스템 라이브러리도 공유</li><li>docker에서는 GUI가 복잡하다.</li></ul></li><li>bash와 pacman등은 호스트의 Linux 바이너리(ELF)를 이용</li></ul><h3 id="msys2-chroot-jail"><a class="header-anchor" href="#msys2-chroot-jail" aria-hidden="true">#</a> MSYS2 Chroot Jail</h3>',14);t.render=function(r,n,t,s,u,c){return o(),e("div",null,[i])};export default t;export{n as __pageData};
