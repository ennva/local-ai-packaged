
import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, Mail } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import emailjs from '@emailjs/browser';

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

// EmailJS template configurations for different languages
const emailJSTemplates = {
  fr: 'template_frenchv1v',   // Replace with your French template ID
  en: 'template_englishv1v1',  // Replace with your English template ID
  de: 'template_englishv1v1'    // Replace with your German template ID
};

// EmailJS service ID - same for all languages
const EMAIL_SERVICE_ID = 'service_4fyhst7'; // Replace with your EmailJS service ID

// EmailJS public key
const EMAIL_PUBLIC_KEY = 'lG0jBRYlx_HUcAHDl'; // Replace with your EmailJS public key

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const my_phone = "+33(0)619199517"
  const my_email = "info@securaops.tech"
  const my_website_url = "https://securaops.tech"

  // Define form with validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Get the correct template ID based on the current language
      const templateId = emailJSTemplates[language] || emailJSTemplates.en; // Default to English if language not found
      
      // Send email using EmailJS with language-specific template
      const result = await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        templateId,
        formRef.current!,
        EMAIL_PUBLIC_KEY
      );
      
      if (result.text === 'OK') {
        toast({
          title: t('contact.success'),
          description: t('contact.successMessage'),
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: t('contact.error'),
        description: t('contact.errorMessage'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary via-primary-dark to-neutral-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-pattern)"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-4">
            <span className="text-accent font-roboto font-semibold text-sm">{t('contact.title')}</span>
          </div>
          <h2 className="mb-4 text-white">{t('contact.title2')}</h2>
          <p className="text-xl text-neutral-300 font-roboto max-w-2xl mx-auto leading-relaxed">{t('contact.subtitle2')}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-200 font-roboto">{t('contact.name')}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            name="name"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-neutral-400 focus:border-secondary focus:ring-2 focus:ring-secondary/50"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-accent" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-200 font-roboto">{t('contact.email')}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            name="email"
                            type="email"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-neutral-400 focus:border-secondary focus:ring-2 focus:ring-secondary/50"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-accent" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-200 font-roboto">{t('contact.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          name="message"
                          rows={5}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-neutral-400 focus:border-secondary focus:ring-2 focus:ring-secondary/50 resize-none"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-accent" />
                    </FormItem>
                  )}
                />
                
                {/* Hidden field to pass the current language to EmailJS */}
                <input type="hidden" name="language" value={language} />
                <input type="hidden" name="your_phone" value={my_phone} />
                <input type="hidden" name="your_email" value={my_email} />
                <input type="hidden" name="your_website_url" value={my_website_url} />
                
                <Button
                  type="submit"
                  className="bg-accent text-primary hover:bg-accent-light w-full md:w-auto px-8 py-3 font-roboto font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  <span>{t('contact.send')}</span>
                  {isSubmitting ? (
                    <div className="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full"></div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Mail className="w-5 h-5 text-secondary" />
              <span className="text-neutral-200 font-roboto">info@securaops.tech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
