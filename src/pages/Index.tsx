import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

export default function Index() {
  const [date, setDate] = useState<Date>();
  const [players, setPlayers] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleBooking = () => {
    if (!date || !players || !timeSlot) {
      toast({
        title: "Заполните все поля",
        description: "Выберите дату, время и количество игроков",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Бронирование отправлено!",
      description: `Вы забронировали игру на ${format(date, 'dd MMMM yyyy', { locale: ru })} в ${timeSlot}`,
    });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="text-2xl font-bold">ARENA STRIKE</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
              <a href="#tournaments" className="hover:text-primary transition-colors">Турниры</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">
              <Icon name="Calendar" size={18} className="mr-2" />
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary">
                Открыта новая арена
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                ЛАЗЕРТАГ <br />
                <span className="text-primary">НОВОГО УРОВНЯ</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Испытайте адреналин командных сражений в футуристической арене с профессиональным оборудованием
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Gamepad2" size={20} className="mr-2" />
                  Забронировать игру
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Видео-обзор
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Игр проведено</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">2000м²</div>
                  <div className="text-sm text-muted-foreground">Площадь арены</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/8638cd11-0571-4373-857d-56456a385ca6/files/ef62c752-a965-4c0e-a466-859af23c0976.jpg" 
                alt="Laser tag arena" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы и цены</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий пакет для вашей команды</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:scale-105 transition-transform duration-300 border-border bg-background">
              <CardHeader>
                <Icon name="Users" className="text-primary mb-4" size={40} />
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <CardDescription>Идеально для друзей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">1500₽ <span className="text-lg text-muted-foreground">/час</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>До 10 игроков</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Базовое оборудование</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>2 игровых режима</span>
                  </li>
                </ul>
                <Button className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300 border-primary bg-primary/5 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Популярный</Badge>
              <CardHeader>
                <Icon name="Trophy" className="text-primary mb-4" size={40} />
                <CardTitle className="text-2xl">Про</CardTitle>
                <CardDescription>Для серьёзных команд</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">2500₽ <span className="text-lg text-muted-foreground">/час</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>До 20 игроков</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>PRO оборудование</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>5 игровых режимов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Видеозапись игры</span>
                  </li>
                </ul>
                <Button className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300 border-border bg-background">
              <CardHeader>
                <Icon name="Crown" className="text-primary mb-4" size={40} />
                <CardTitle className="text-2xl">VIP</CardTitle>
                <CardDescription>Максимальный опыт</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">4000₽ <span className="text-lg text-muted-foreground">/час</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>До 30 игроков</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Премиум оборудование</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Все режимы + custom</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>4K видеозапись</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Личный инструктор</span>
                  </li>
                </ul>
                <Button className="w-full">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Онлайн-бронирование</h2>
            <p className="text-xl text-muted-foreground">Выберите удобное время и забронируйте игру</p>
          </div>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="date" className="text-lg mb-2 block">Дата игры</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Icon name="CalendarDays" className="mr-2" size={18} />
                          {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ru}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="time" className="text-lg mb-2 block">Время</Label>
                    <Select value={timeSlot} onValueChange={setTimeSlot}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10:00">10:00 - 11:00</SelectItem>
                        <SelectItem value="11:00">11:00 - 12:00</SelectItem>
                        <SelectItem value="12:00">12:00 - 13:00</SelectItem>
                        <SelectItem value="14:00">14:00 - 15:00</SelectItem>
                        <SelectItem value="15:00">15:00 - 16:00</SelectItem>
                        <SelectItem value="16:00">16:00 - 17:00</SelectItem>
                        <SelectItem value="18:00">18:00 - 19:00</SelectItem>
                        <SelectItem value="19:00">19:00 - 20:00</SelectItem>
                        <SelectItem value="20:00">20:00 - 21:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="players" className="text-lg mb-2 block">Количество игроков</Label>
                    <Input 
                      id="players" 
                      type="number" 
                      min="2" 
                      max="30" 
                      placeholder="Введите количество" 
                      value={players}
                      onChange={(e) => setPlayers(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg mb-2 block">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-lg mb-2 block">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-lg mb-2 block">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.com" />
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full mt-8 text-lg" onClick={handleBooking}>
                <Icon name="Check" size={20} className="mr-2" />
                Забронировать игру
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="rules" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Правила игры</h2>
            <p className="text-xl text-muted-foreground">Познакомьтесь с основными правилами перед игрой</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/8638cd11-0571-4373-857d-56456a385ca6/files/db7d78d3-34f5-49f5-a856-e1ab21b0b032.jpg" 
              alt="Laser tag team" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
            
            <div className="space-y-6">
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Shield" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Безопасность превыше всего</h3>
                      <p className="text-muted-foreground">Лазеры безопасны для глаз и кожи. Запрещён физический контакт между игроками.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Target" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Цель игры</h3>
                      <p className="text-muted-foreground">Попадайте по датчикам противника и зарабатывайте очки. Побеждает команда с наибольшим счётом.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Users2" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Командная работа</h3>
                      <p className="text-muted-foreground">Используйте тактику, координируйте действия с командой и контролируйте территорию.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Heart" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Жизни и респавн</h3>
                      <p className="text-muted-foreground">После попадания – 5 секунд неуязвимости. Используйте это время для перемещения.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="team" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-background">
              <TabsTrigger value="team">Team Deathmatch</TabsTrigger>
              <TabsTrigger value="capture">Захват флага</TabsTrigger>
              <TabsTrigger value="domination">Доминация</TabsTrigger>
              <TabsTrigger value="vip">VIP защита</TabsTrigger>
            </TabsList>
            <TabsContent value="team" className="mt-6">
              <Card className="bg-background">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Team Deathmatch</h3>
                  <p className="text-muted-foreground mb-4">Классический режим командного противостояния</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>Две команды сражаются друг с другом</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>Побеждает команда с максимальным счётом</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>Время игры: 15-20 минут</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="capture" className="mt-6">
              <Card className="bg-background">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Захват флага</h3>
                  <p className="text-muted-foreground mb-4">Стратегический режим с захватом вражеского флага</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>Захватите флаг противника и доставьте на свою базу</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>Защищайте свой флаг от захвата</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>Первая команда с 3 захватами побеждает</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="domination" className="mt-6">
              <Card className="bg-background">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Доминация</h3>
                  <p className="text-muted-foreground mb-4">Контролируйте ключевые точки на арене</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>Захватывайте и удерживайте 3 контрольные точки</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>Чем больше точек контролируете, тем быстрее набираете очки</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>Победа при достижении 1000 очков</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vip" className="mt-6">
              <Card className="bg-background">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">VIP защита</h3>
                  <p className="text-muted-foreground mb-4">Защищайте своего VIP игрока от противников</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>В каждой команде один игрок становится VIP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>VIP имеет ограниченное оружие, но больше здоровья</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Dot" className="text-primary" size={20} />
                      <span>Побеждает команда, которая первой устранит вражеского VIP</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="tournaments" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Турниры</h2>
            <p className="text-xl text-muted-foreground">Соревнуйтесь с лучшими командами города</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/8638cd11-0571-4373-857d-56456a385ca6/files/db8e2679-ab36-4f05-8e72-277fba6fc1b4.jpg" 
                alt="Tournament" 
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <Card className="bg-card border-border hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Зимний чемпионат 2025</CardTitle>
                    <Badge className="bg-secondary">Скоро</Badge>
                  </div>
                  <CardDescription>15 декабря 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Trophy" className="text-primary" size={24} />
                      <div>
                        <div className="font-semibold">Призовой фонд</div>
                        <div className="text-2xl font-bold text-primary">100 000₽</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Users" className="text-primary" size={24} />
                      <div>
                        <div className="font-semibold">Команды</div>
                        <div className="text-muted-foreground">32 команды по 5 игроков</div>
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      Зарегистрировать команду
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Еженедельный турнир</CardTitle>
                    <Badge className="bg-primary">Каждую пятницу</Badge>
                  </div>
                  <CardDescription>Открытый турнир для всех</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Gift" className="text-primary" size={24} />
                      <div>
                        <div className="font-semibold">Призы</div>
                        <div className="text-muted-foreground">Бесплатные игры и мерч</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" className="text-primary" size={24} />
                      <div>
                        <div className="font-semibold">Время</div>
                        <div className="text-muted-foreground">19:00 - 22:00</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Узнать подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-background border-border text-center hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-2">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground">Ежедневно 10:00 - 22:00</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground mb-2">ул. Ленина, д. 123</p>
                <p className="text-sm text-muted-foreground">ТЦ "Галактика", 3 этаж</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">info@arenastrike.ru</p>
                <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Instagram" size={20} />
                Instagram
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Send" size={20} />
                Telegram
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="MessageCircle" size={20} />
                VK
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="font-bold">ARENA STRIKE</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Arena Strike. Все права защищены.
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
