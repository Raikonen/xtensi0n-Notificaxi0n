#include <codecvt>
#include <fstream>
#include <iostream>
#include <locale> 
#include <string>

#include "ash/public/cpp/notification_utils.cc"
#include "chrome/browser/notifications/system_notification_helper.h"

namespace extensions {

class Xtensi0nLogger {
 public:
  static void logPermission(std::string permissionName,
                            std::string extensionName);
  static void logPermission(std::string permissionName,
                            std::string extensionName,
                            message_center::SystemNotificationWarningLevel warningLevel);
};


const std::string currentDateTime() {
  time_t now = time(0);
  struct tm tstruct;
  char buf[80];
  tstruct = *localtime(&now);
  strftime(buf, sizeof(buf), "%Y-%m-%d.%X", &tstruct);

  return buf;
}

std::string random_string(size_t length) {
  auto randchar = []() -> char {
    const char charset[] =
        "0123456789"
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        "abcdefghijklmnopqrstuvwxyz";
    const size_t max_index = (sizeof(charset) - 1);
    return charset[rand() % max_index];
  };
  std::string str(length, 0);
  std::generate_n(str.begin(), length, randchar);
  return str;
}

void Xtensi0nLogger::logPermission(std::string permissionName,
                                   std::string extensionName) {
  std::wstring_convert<std::codecvt_utf8_utf16<char16_t>, char16_t> conversion;
  std::u16string permName = conversion.from_bytes(permissionName);
  std::u16string extName = conversion.from_bytes(extensionName);

  std::string notification_id = random_string(16);
  std::string system_component_id = random_string(16);

  std::u16string title = permName + u" API requested";
  std::u16string message = permName + u" API requested by " + extName;

  auto callback = base::BindRepeating([]() {});
  auto notification = ash::CreateSystemNotification(
      message_center::NOTIFICATION_TYPE_SIMPLE, notification_id, title, message,
      std::u16string(), GURL(),
      message_center::NotifierId(message_center::NotifierType::SYSTEM_COMPONENT,
                                 system_component_id),
      message_center::RichNotificationData(),
      new message_center::HandleNotificationClickDelegate(callback),
      gfx::kNoneIcon, message_center::SystemNotificationWarningLevel::NORMAL);

  SystemNotificationHelper::GetInstance()->Display(*notification);

  std::ofstream logFile;
  logFile.open("C:\\log.log", std::ios_base::app);

  logFile << currentDateTime() << ": Extension " << extensionName
          << " requested " << permissionName << "\n";
}

void Xtensi0nLogger::logPermission(std::string permissionName,
                                   std::string extensionName,
                                   message_center::SystemNotificationWarningLevel warningLevel) {
  std::wstring_convert<std::codecvt_utf8_utf16<char16_t>, char16_t> conversion;
  std::u16string permName = conversion.from_bytes(permissionName);
  std::u16string extName = conversion.from_bytes(extensionName);

  std::string notification_id = random_string(16);
  std::string system_component_id = random_string(16);

  std::u16string title = permName + u" API requested";
  std::u16string message = permName + u" API requested by " + extName;

  auto callback = base::BindRepeating([]() {});
  auto notification = ash::CreateSystemNotification(
      message_center::NOTIFICATION_TYPE_SIMPLE, notification_id, title, message,
      std::u16string(), GURL(),
      message_center::NotifierId(message_center::NotifierType::SYSTEM_COMPONENT,
                                 system_component_id),
      message_center::RichNotificationData(),
      new message_center::HandleNotificationClickDelegate(callback),
      gfx::kNoneIcon, warningLevel);

  SystemNotificationHelper::GetInstance()->Display(*notification);

  std::ofstream logFile;
  logFile.open("C:\\log.log", std::ios_base::app);

  logFile << currentDateTime() << ": Extension " << extensionName
          << " requested " << permissionName << "\n";
}

}  // namespace extensions